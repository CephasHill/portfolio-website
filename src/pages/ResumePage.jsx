import PageShell from '../components/PageShell'
import { siteLinks } from '../data/siteLinks'

export default function ResumePage() {
  return (
    <PageShell eyebrow="04 / Credentials" title="Resume">
      <section className="section page-content">
        <div className="resume-intro">
          <div>
            <p className="section-number">PETER HILL</p>
            <h2>Technical Artist / Programmer</h2>
            <p className="resume-summary">Computer Science: Animation and Games student specializing in production pipeline tools, media workflow automation, and computer graphics programming. Experienced in Python, C++, and industry DCCs to streamline artist workflows, automate render and review pipelines, and solve complex technical challenges.</p>
          </div>
          <div className="resume-contact">
            <a className="text-link" href={`mailto:${siteLinks.contactEmail}`}>{siteLinks.contactEmail}</a>
            <span>Provo, UT</span>
            <a className="text-link" href={siteLinks.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a className="text-link" href={siteLinks.githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="resume-layout">
          <div>
            <section className="resume-section" aria-labelledby="experience-heading">
              <p className="section-number">EXPERIENCE</p>
              <h2 id="experience-heading">Professional experience</h2>
              <div className="resume-entry">
                <div className="resume-entry-heading"><h3>Visual Effects Artist <span>/ BYUtv</span></h3><p>02/2026 – Present</p></div>
                <ul>
                  <li>Automated studio workflows with Python scripts that batch-publish Nuke scripts to Deadline, consolidate renders into a unified Premiere QC folder, standardize shot scripts, and streamline the over-scan pipeline between Nuke and Blender.</li>
                  <li>Managed tracking and pipeline efficiency for two 100+ shot Studio C sketches, upgrading the master VFX sheet with automated progress tracking and QC workflows used by 10+ employees.</li>
                  <li>Executed 75+ Nuke composites and led Blender 3D integration across broadcast episodes, building custom rigs, tracking footage, and rendering multi-pass AOVs.</li>
                </ul>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-heading"><h3>Animator <span>/ BYU Integrity &amp; Compliance Office</span></h3><p>10/2023 – Present</p></div>
                <ul>
                  <li>Pioneered the office's lead animator role, managing the end-to-end 2D animation and rigging pipeline in After Effects and Duik.</li>
                  <li>Authored a production pipeline guide and interviewed, trained, and mentored three incoming animators.</li>
                </ul>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-heading"><h3>On-Set SPFX/VFX Intern <span>/ The Chosen</span></h3><p>06/2026</p></div>
                <ul>
                  <li>Assisted the Kutcher Spectrum FX crew with atmospheric smoke, dust, fire, and weather effects, plus HDRI capture, camera tracking, and green screen deployment for post-production.</li>
                </ul>
              </div>
            </section>

            <section className="resume-section" aria-labelledby="projects-heading">
              <p className="section-number">SELECTED PROJECTS</p>
              <h2 id="projects-heading">Built and shipped</h2>
              <div className="resume-projects">
                <article>
                  <div className="resume-entry-heading"><h3>NT Connect <span>/ React web application</span></h3><p>09/2026 – Present</p></div>
                  <p>Developing a responsive reading application in React and Vite deployed on AWS EC2 with HTTPS, React Router, state management, and custom USJ/web parsers.</p>
                </article>
                <article>
                  <div className="resume-entry-heading"><h3>Daily Psalms App <span>/ Android application</span></h3><p>07/2026 – Present</p></div>
                  <p>Architected an offline Kotlin and Jetpack Compose app with Python scraping scripts and a local JSON datastore for fast text and lexicon retrieval.</p>
                </article>
                <article>
                  <div className="resume-entry-heading"><h3>Maya Python Train Generator</h3><p>01/2025 – 02/2025</p></div>
                  <p>Engineered a Maya Python tool with a custom UI and parameter controls to procedurally generate customizable 3D train assets.</p>
                </article>
                <article>
                  <div className="resume-entry-heading"><h3>Honey Business <span>/ FX Artist</span></h3><p>12/2025 – 04/2026</p></div>
                  <p>Developed procedural impact dust systems and Vellum grass simulations for character interactions within a Houdini production pipeline.</p>
                </article>
              </div>
            </section>
          </div>

          <aside>
            <section className="resume-section" aria-labelledby="skills-heading">
              <p className="section-number">TECHNICAL SKILLS</p>
              <h2 id="skills-heading">Toolkit</h2>
              <dl className="resume-skills">
                <div><dt>Programming &amp; data</dt><dd>Python, C++, C, Java, Kotlin, JavaScript, SQL, HTML/CSS, VBA, Bash/Linux, Git</dd></div>
                <div><dt>Web &amp; frameworks</dt><dd>React, Vite, REST APIs, MySQL, JUnit, AWS EC2, Jetpack Compose, Android SDK</dd></div>
                <div><dt>Pipeline &amp; VFX</dt><dd>Houdini, Nuke, Maya, Blender, Unreal Engine 5, Deadline, Substance Painter, Premiere Pro, After Effects</dd></div>
              </dl>
            </section>

            <section className="resume-section" aria-labelledby="education-heading">
              <p className="section-number">EDUCATION</p>
              <h2 id="education-heading">Brigham Young University</h2>
              <p className="resume-meta">Bachelor of Science, Computer Science: Animation and Games<br />Minor: Ancient Near Eastern Studies<br />09/2023 – 04/2028 · Provo, UT</p>
              <p className="resume-note">Relevant coursework includes advanced software construction, web programming, data structures, computer graphics, real-time techniques, 3D visual effects, scripting for animation, and technical art.</p>
            </section>
          </aside>
        </div>

        <div className="resume-footer">
          <a className="text-link" href="/portfolio">Explore selected work <span aria-hidden="true">↗</span></a>
          <a className="text-link" href="/about">Learn more about Peter <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </PageShell>
  )
}
