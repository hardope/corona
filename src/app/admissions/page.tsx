import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { CENTRAL_OFFICE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  alternates: { canonical: "/admissions" },
  description:
    "Apply to Corona Schools for 2026/2027. Entrance examination registration for Years 7 to 11 is open for day and boarding places, and you can apply online through SafApply.",
};

const STEPS = [
  { title: "Choose a school", body: "Look through our schools, from crèche to secondary, and pick the one that suits your child’s age and where you live." },
  { title: "Register for the entrance exam", body: "Children joining secondary school (Years 7 to 11) sit an entrance examination. Registration for 2026/2027 is open." },
  { title: "Apply online", body: "Send your application through the SafApply portal, or contact our admissions team for help." },
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
          <span className="eyebrow on-dark">2026/2027 Admissions</span>
          <h1>Quality, well-rounded<br />education</h1>
          <p className="lede">Parents have trusted Corona Schools for over 70 years. Alongside their academic work, our students take part in music, sport, drama and many other activities.</p>
          <div className="hero-ctas">
            <Link href="/schools" className="btn btn-primary">Choose Your School <Icon name="arrow" /></Link>
            <Link href="/contact" className="btn btn-ghost-light">Contact Admissions</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">How It Works</span>
            <h2>How to apply</h2>
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
            <span className="eyebrow tone-indigo">Why Corona Schools</span>
            <h2>What we offer</h2>
            <ul className="value-list">
              <li>
                <span className="value-num">01</span>
                <div><h4>Facilities</h4><p>Laboratories, digital classrooms, creative studios and sports facilities.</p></div>
              </li>
              <li>
                <span className="value-num">02</span>
                <div><h4>Experienced teachers</h4><p>Our staff include 158 Microsoft Innovative Educator Experts and 187 Microsoft Certified Educators.</p></div>
              </li>
              <li>
                <span className="value-num">03</span>
                <div><h4>Curriculum</h4><p>Nigerian, British and international curricula, with Cambridge IGCSE at secondary level.</p></div>
              </li>
              <li>
                <span className="value-num">04</span>
                <div><h4>Day and boarding</h4><p>Secondary students can board weekly at Ibeju-Lekki or full-time at Agbara.</p></div>
              </li>
            </ul>
          </Reveal>
          <Reveal as="div" className="mt-0">
            <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--radius)", padding: 32 }}>
              <p className="eyebrow" style={{ marginBottom: 8 }}>Need help applying?</p>
              <p style={{ color: "var(--ink-soft)", fontSize: ".95rem", lineHeight: 1.6, marginBottom: 20 }}>
                Our admissions team replies within two working days.
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
                <span className="eyebrow" style={{ color: "#FFD9D6" }}>Admissions</span>
                <h2>Questions about applying?</h2>
                <p className="lede">Call or email our admissions team and we will help you choose a school and apply.</p>
                <div className="admissions-ctas">
                  <Link href="/contact" className="btn btn-white">Contact Admissions <Icon name="arrow" /></Link>
                </div>
              </div>
              <ul className="admissions-facts">
                <li><Icon name="check" /> Entrance exam registration open for Years 7 to 11</li>
                <li><Icon name="check" /> Apply online through the SafApply portal</li>
                <li><Icon name="check" /> Weekly and full boarding at secondary level</li>
                <li><Icon name="check" /> We reply within two working days</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
