import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "TechHub",
  description:
    "Corona Schools' TechHub — a Microsoft Showcase School innovation centre for robotics and computing, staffed by Microsoft Innovative Educator Experts.",
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
          <span className="eyebrow on-dark">TechHub</span>
          <h1>Built for what&rsquo;s next.</h1>
          <p className="lede">A Microsoft Showcase School innovation centre — where robotics, computing and a Microsoft-certified teaching staff meet everyday classroom life.</p>
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
            <span className="eyebrow tone-indigo">Innovation</span>
            <h2>A Microsoft Showcase School.</h2>
            <p className="lede">Corona Schools&rsquo; Trust Council is recognized as a Microsoft Showcase School — one of a select group worldwide — reflecting a sustained investment in technology-driven teaching, hands-on robotics, and a staff fluent in the tools students will use for the rest of their lives.</p>
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
            <span className="eyebrow">Recently</span>
            <h2>TechHub, officially unveiled.</h2>
            <p className="lede">Our newest innovation centre opened its doors following a strong showing at a recent robotics competition — the latest step in a technology programme that spans every campus.</p>
          </Reveal>
          <Reveal className="value-list mt-0" style={{ maxWidth: 640 }}>
            <li>
              <span className="value-num">01</span>
              <div><h4>Hands-on robotics</h4><p>Pupils design, build and program robots as part of the regular curriculum, not an after-school extra.</p></div>
            </li>
            <li>
              <span className="value-num">02</span>
              <div><h4>Certified teaching staff</h4><p>158 Microsoft Innovative Educator Experts and 187 Microsoft Certified Educators across the Trust Council.</p></div>
            </li>
            <li>
              <span className="value-num">03</span>
              <div><h4>Competition-tested</h4><p>Recent robotics competition success put Corona pupils&rsquo; skills up against the best.</p></div>
            </li>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="admissions-cta mt-0" style={{ background: "var(--feature-ink)" }}>
            <div className="admissions-inner" style={{ gridTemplateColumns: "1fr", textAlign: "center", justifyItems: "center" }}>
              <div>
                <span className="eyebrow tone-feature">See It In Person</span>
                <h2>Visit a Corona campus.</h2>
                <p className="lede" style={{ margin: "16px auto 0" }}>Every school shares the same technology programme — find yours and get in touch.</p>
                <div className="admissions-ctas" style={{ justifyContent: "center" }}>
                  <Link href="/schools" className="btn btn-white">Explore Our Schools <Icon name="arrow" /></Link>
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
