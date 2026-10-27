import PageShell, { HeaderLink } from '../components/PageShell'
import { siteLinks } from '../data/siteLinks'

export default function AboutPage() {
  return (
    <PageShell eyebrow="03 / Approach" title="About">
      <section className="section page-content about-content">
        <p>I&apos;m a Computer Science student at BYU with an emphasis in Animation, looking for opportunities in software engineering and technical direction. My passion lies in the intersection of tech and creativity, and being a TD is the perfect way to blend my technical skills with my artistic eye.</p>
        <p>I am a problem-solver at heart, and I&apos;m always looking for ways to make workflows and processes more efficient. I recently developed and published an Android app for Bible reading and habit tracking because in my personal Bible studies I noticed a gap in the current available tools. I&apos;m a total Bible nerd, including pursuing an Ancient Near Eastern Studies minor, so I was able to combine my passions in this project.</p>
        <p>I bring that same engineering mindset to my visual work. At BYUtv, I noticed bottlenecks in our production pipeline and proactively wrote Python scripts to speed up our small VFX team&apos;s productivity. At the BYU Integrity and Compliance Office, I manage the entire production pipeline as the sole animator. The administration and legal offices at BYU know that they can come to me if they want high-quality animated videos out of their ideas.</p>
        <p>Whether I&apos;m writing software, developing apps, or building procedural systems in 3D, my goal is always the same: solving problems to build better, more efficient systems and helping artists achieve their vision.</p>
        <h2>Contact</h2>
        <p>Recruiters and collaborators can reach out directly:<br /><HeaderLink href={siteLinks.contactEmail && `mailto:${siteLinks.contactEmail}`} label={siteLinks.contactEmail || 'TODO: Add contact email'} todoText="TODO: Add contact email" /></p>
      </section>
    </PageShell>
  )
}
