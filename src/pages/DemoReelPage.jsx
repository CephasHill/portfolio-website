import PageShell, { HeaderLink } from '../components/PageShell'
import { siteLinks } from '../data/siteLinks'

export default function DemoReelPage() {
  return (
    <PageShell eyebrow="01 / Introduction" title="Demo reel">
      <section className="section page-content">
        <div className="reel-panel">
          <div className="reel-icon" aria-hidden="true">▶</div>
          <p className="reel-copy">Add your reel link or embedded video here. Keep autoplay disabled and sound off by default.</p>
          <HeaderLink href={siteLinks.reelUrl} label="Watch reel" todoText="TODO: Add demo reel URL" />
        </div>
      </section>
    </PageShell>
  )
}
