import PageShell, { HeaderLink } from '../components/PageShell'
import { siteLinks } from '../data/siteLinks'

export default function DemoReelPage() {
  return (
    <PageShell eyebrow="01 / Introduction" title="Demo reel">
      <section className="section page-content">
        <div className="reel-heading">
          <div>
            <p className="section-number">VFX GENERALIST REEL</p>
            <h2>VFX Generalist Reel - June 2026</h2>
          </div>
          <HeaderLink href={siteLinks.reelUrl} label="Watch on YouTube" />
        </div>
        <div className="reel-video">
          <iframe
            src="https://www.youtube.com/embed/I_KEfc8GeYQ"
            title="VFX Generalist Reel - June 2026"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="reel-breakdown">
          <p><strong>0:02 - Porsche 911 Live-Action Integration</strong><br />Photorealistic CGI Porsche 911 integration into live-action footage, including CG breakdown. On-set VFX supervision and planning, HDRI capture, 3D camera tracking in Syntheyes, accurate CG lighting and reflections in Houdini, custom procedural UVs and material replacements, and final composite in Nuke.</p>
          <p><strong>0:18 - Crucifixion Still Life &amp; Crown of Thorns Turntable</strong><br />Photorealistic scene featuring historically accurate items from the crucifixion, alongside a hero asset look-dev breakdown. Modeled in Maya, Textured in Substance Painter.</p>
          <p><strong>0:24 - Honey Business Short Film</strong><br />FX work for BYU Animation's 2026 Capstone "Honey Business." Procedural dust system triggered by geometry friction and impact. Vellum-simulated grass interaction with character.</p>
          <p><strong>0:29 - What It Takes (Documentary)</strong><br />Object removal, clean plating, and 2D tracking to remove distracting background elements from the shot.<br />Full documentary: <a className="text-link" href="https://youtu.be/KLi2Bwu0KHQ" target="_blank" rel="noreferrer">https://youtu.be/KLi2Bwu0KHQ</a></p>
          <p><strong>0:35 - Rocket Launch FX</strong><br />Houdini Pyro simulation depicting a rocket launch malfunction. Features procedural smoke plumes and fire.</p>
          <p><strong>0:41 - Geyser Simulation</strong><br />Houdini particle simulation utilizing custom forces to drive particle physics and mist density.</p>
          <p><strong>0:45 - Python Train Generator</strong><br />Pipeline tool written in Python (Maya API). Generates procedural train configurations via a custom UI, allowing users to sequence specific cars and track lengths.</p>
        </div>
      </section>
    </PageShell>
  )
}
