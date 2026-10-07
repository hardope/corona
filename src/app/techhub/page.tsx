import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "TechHub",
  alternates: { canonical: "/techhub" },
  description:
    "The Corona Schools TechHub at our Ibeju-Lekki campus, our robotics teams, and our Microsoft-certified teaching staff.",
};

export default function TechHubPage() {
  return (
    <>
      <section className="page-hero has-media">
        <div className="page-hero-media">
          <Image
            src="/images/techhub.jpg"
            alt="A Corona Schools teacher leading a robotics lesson on an interactive smartboard while two students work at laptops"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap">
          <span className="eyebrow on-dark">Technology</span>
          <h1>TechHub</h1>
          <p className="lede">Our TechHub at the Ibeju-Lekki campus opened in 2026. Students use it for coding, robotics and digital learning.</p>
        </div>
      </section>

      <section>
        <div className="wrap split rev">
          <div className="split-media">
            <Image
              src="/images/lab.jpg"
              alt="An empty, well-equipped Corona Schools science laboratory with test tube racks on a green worktop"
              fill
              sizes="(min-width: 900px) 45vw, 100vw"
            />
          </div>
          <Reveal className="mt-0">
            <span className="eyebrow tone-indigo">Microsoft</span>
            <h2>A Microsoft Showcase School</h2>
            <p className="lede">Corona Schools&rsquo; Trust Council is a Microsoft Showcase School, part of a worldwide group of schools that Microsoft recognises for using technology well in teaching. Many of our teachers hold Microsoft certifications.</p>
            <div className="badge-row">
              <span className="pill"><strong>158</strong>&nbsp;Microsoft Innovative Educator Experts</span>
              <span className="pill"><strong>187</strong>&nbsp;Microsoft Certified Educators</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">About the TechHub</span>
            <h2>Built by our alumni</h2>
            <p className="lede">The Alumni Association set up the TechHub as its legacy project for the Trust Council&rsquo;s 70th anniversary.</p>
          </Reveal>
          <Reveal className="value-list mt-0" style={{ maxWidth: 640 }}>
            <li>
              <span className="value-num">01</span>
              <div><h4>Coding and robotics</h4><p>ICT, coding, robotics and STEAM are part of school life across our schools.</p></div>
            </li>
            <li>
              <span className="value-num">02</span>
              <div><h4>Certified teachers</h4><p>158 Microsoft Innovative Educator Experts and 187 Microsoft Certified Educators across the Trust Council.</p></div>
            </li>
            <li>
              <span className="value-num">03</span>
              <div><h4>Robotics competitions</h4><p>Two Corona teams, Team Alpha and Team Beta, reached the 2026 Eurobot Junior finals.</p></div>
            </li>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="admissions-cta mt-0" style={{ background: "var(--feature-ink)" }}>
            <div className="admissions-inner" style={{ gridTemplateColumns: "1fr", textAlign: "center", justifyItems: "center" }}>
              <div>
                <span className="eyebrow tone-feature">Visit Us</span>
                <h2>Find a school near you</h2>
                <p className="lede" style={{ margin: "16px auto 0" }}>See all eight of our schools and contact them directly.</p>
                <div className="admissions-ctas" style={{ justifyContent: "center" }}>
                  <Link href="/schools" className="btn btn-white">See Our Schools <Icon name="arrow" /></Link>
                  <Link href="/contact" className="btn btn-on-crimson">Contact Us</Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
