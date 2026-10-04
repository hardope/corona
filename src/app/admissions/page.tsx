import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { CENTRAL_OFFICE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Admissions is open for 2025/2026 at Corona Schools' Trust Council — scholarship entrance examinations, online applications via SafApply, day and boarding options.",
};

const STEPS = [
  { title: "Choose your school", body: "Review our eight campuses and pick the one that fits your child’s stage and location — from crèche through to secondary." },
  { title: "Sit the entrance assessment", body: "Scholarship entrance examinations are available across our schools for qualifying candidates." },
  { title: "Apply online", body: "Submit your application through the SafApply portal, or reach our admissions team directly for guidance." },
];

export default function AdmissionsPage() {
  return (
    <>
      <section className="page-hero has-media">
        <div className="page-hero-media">
          <Image
            src="/images/lab.jpg"
            alt="An empty, well-equipped Corona Schools science laboratory with test tube racks on a green worktop"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap">
          <span className="eyebrow on-dark">Admissions &middot; 2025/2026</span>
          <h1>Quality, well-rounded<br />education.</h1>
          <p className="lede">Trusted by generations of parents for over 70 years — extending beyond exam results into music, sport, drama and every other area where a child grows.</p>
          <div className="hero-ctas">
            <Link href="/schools" className="btn btn-primary">Choose Your School <Icon name="arrow" /></Link>
            <Link href="/contact" className="btn btn-ghost-light">Talk to Admissions</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">How It Works</span>
            <h2>Three steps to apply.</h2>
          </Reveal>
          <Reveal className="process-list mt-0" style={{ maxWidth: 760 }}>
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap about-grid">
          <Reveal className="mt-0">
            <span className="eyebrow tone-indigo">What&rsquo;s Included</span>
            <h2>Built for the whole child.</h2>
            <ul className="value-list">
              <li>
                <span className="value-num">01</span>
                <div><h4>World-class facilities</h4><p>Purpose-built classrooms, laboratories and sporting facilities across every campus.</p></div>
              </li>
              <li>
                <span className="value-num">02</span>
                <div><h4>Certified teachers</h4><p>Including Microsoft Innovative Educator Experts and Microsoft Certified Educators.</p></div>
              </li>
              <li>
                <span className="value-num">03</span>
                <div><h4>Blended curricula</h4><p>Nigerian, British and international curricula, benchmarked to Cambridge standards at secondary level.</p></div>
              </li>
              <li>
                <span className="value-num">04</span>
                <div><h4>Day &amp; boarding options</h4><p>Including full boarding at Corona Secondary School, Agbara.</p></div>
              </li>
            </ul>
          </Reveal>
          <Reveal as="div" className="mt-0">
            <div className="admissions-facts" style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: 32 }}>
              <p className="eyebrow" style={{ marginBottom: 8 }}>Need help applying?</p>
              <p style={{ color: "var(--ink-soft)", fontSize: ".95rem", lineHeight: 1.6, marginBottom: 20 }}>
                Our admissions team responds within 1–2 business days.
              </p>
              <ul className="foot-contact" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <li><Icon name="phone" /><a href={`tel:${CENTRAL_OFFICE.phones[0].replace(/[^+\d]/g, "")}`}>{CENTRAL_OFFICE.phones[0]}</a></li>
                <li><Icon name="mail" /><a href={`mailto:${CENTRAL_OFFICE.email}`}>{CENTRAL_OFFICE.email}</a></li>
                <li><Icon name="pin" /><span>{CENTRAL_OFFICE.address}</span></li>
              </ul>
              <Link href="/schools" className="btn btn-outline" style={{ marginTop: 24, width: "100%", justifyContent: "center" }}>View School Directory <Icon name="arrow" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="admissions-cta mt-0">
            <div className="admissions-inner">
              <div>
                <span className="eyebrow" style={{ color: "#FFD9D6" }}>Admissions Open</span>
                <h2>Your child&rsquo;s odyssey<br />starts here.</h2>
                <p className="lede">Entrance is now open for Years 7–11, including scholarship entrance examinations, with day and boarding options available.</p>
                <div className="admissions-ctas">
                  <Link href="/contact" className="btn btn-white">Contact Admissions <Icon name="arrow" /></Link>
                </div>
              </div>
              <ul className="admissions-facts">
                <li><Icon name="check" /> Scholarship entrance examinations available</li>
                <li><Icon name="check" /> Online application via the SafApply portal</li>
                <li><Icon name="check" /> Day and boarding options across campuses</li>
                <li><Icon name="check" /> Response within 1–2 business days</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
