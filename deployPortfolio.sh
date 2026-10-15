#!/usr/bin/env bash
set -Eeuo pipefail

usage() {
  cat <<'USAGE'
Usage: bash deployPortfolio.sh -k <private-key.pem> -h <EC2 public hostname or IPv4>

Example:
  bash deployPortfolio.sh -k ~/.ssh/peterhill-ec2.pem -h ec2-203-0-113-10.compute-1.amazonaws.com

The deployment target is fixed to:
  /srv/portfolio

Configure Nginx to use this document root:
  /srv/portfolio/public

This script builds and uploads the site. It does not configure DNS, Nginx, or HTTPS.
USAGE
}

KEY=''
HOST=''

while getopts ':k:h:' flag; do
  case "$flag" in
    k) KEY="$OPTARG" ;;
    h) HOST="$OPTARG" ;;
    :) printf 'Missing value for -%s.\n' "$OPTARG" >&2; usage >&2; exit 2 ;;
    \?) printf 'Unknown option: -%s\n' "$OPTARG" >&2; usage >&2; exit 2 ;;
  esac
done
shift $((OPTIND - 1))

if [[ $# -ne 0 ]]; then
  printf 'Unexpected argument: %s\n' "$1" >&2
  usage >&2
  exit 2
fi

if [[ -z "$KEY" || -z "$HOST" ]]; then
  printf 'Both -k and -h are required.\n' >&2
  usage >&2
  exit 2
fi

if [[ ! "$HOST" =~ ^[A-Za-z0-9][A-Za-z0-9.-]*$ ]]; then
  printf 'Use an EC2 public DNS name or IPv4 address for -h.\n' >&2
  exit 2
fi

CALLER_DIR="$(pwd)"
if [[ "$KEY" != /* ]]; then
  KEY="$CALLER_DIR/$KEY"
fi
if [[ ! -f "$KEY" ]]; then
  printf 'Private key file not found: %s\n' "$KEY" >&2
  exit 2
fi

for command_name in npm ssh scp; do
  if ! command -v "$command_name" >/dev/null 2>&1; then
    printf 'Required command not found: %s\n' "$command_name" >&2
    exit 2
  fi
done

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR"

if [[ ! -f package.json || ! -f package-lock.json ]]; then
  printf 'Run this script from a Vite project with package.json and package-lock.json.\n' >&2
  exit 2
fi

SSH_TARGET="ubuntu@$HOST"
REMOTE_SERVICE_ROOT='/srv/portfolio'
RELEASE_ID="$(date -u +%Y%m%dT%H%M%SZ)-$$"
REMOTE_RELEASE="$REMOTE_SERVICE_ROOT/releases/$RELEASE_ID"
SSH_KEY_ARGS=(-i "$KEY")

printf '\n----> Install locked dependencies\n'
npm ci

printf '\n----> Check and build the portfolio\n'
npm run lint
npm run build

if [[ ! -f dist/index.html ]]; then
  printf 'Build finished without dist/index.html; stopping before upload.\n' >&2
  exit 1
fi

printf '\n----> Prepare a new release on %s\n' "$HOST"
ssh "${SSH_KEY_ARGS[@]}" "$SSH_TARGET" "mkdir -p '$REMOTE_RELEASE'"

printf '\n----> Upload the built site\n'
scp -r "${SSH_KEY_ARGS[@]}" dist/. "$SSH_TARGET:$REMOTE_RELEASE/"

printf '\n----> Activate the new release\n'
ssh "${SSH_KEY_ARGS[@]}" "$SSH_TARGET" bash -s -- "$REMOTE_SERVICE_ROOT" "$RELEASE_ID" <<'REMOTE_SCRIPT'
set -euo pipefail

service_root="$1"
release_id="$2"
release_dir="$service_root/releases/$release_id"
public_link="$service_root/public"
next_link="$service_root/public.next"

if [[ ! -f "$release_dir/index.html" ]]; then
  printf 'Uploaded release is missing index.html; leaving the current site unchanged.\n' >&2
  exit 1
fi

if [[ -e "$public_link" && ! -L "$public_link" ]]; then
  printf 'Refusing to replace existing directory %s. Move it aside once before using this release-based deploy.\n' "$public_link" >&2
  exit 1
fi

ln -sfn "$release_dir" "$next_link"
mv -Tf "$next_link" "$public_link"
printf 'Now serving release %s\n' "$release_id"
REMOTE_SCRIPT

printf '\n----> Deployment complete\n'
printf 'Caddy document root: %s/public\n' "$REMOTE_SERVICE_ROOT"
printf 'Older releases are kept under %s/releases for rollback.\n' "$REMOTE_SERVICE_ROOT"
printf 'Local dist/ was left in place.\n'
