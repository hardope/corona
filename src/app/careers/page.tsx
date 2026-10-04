import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { CAREER_ROLES, CENTRAL_OFFICE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Corona Schools' Trust Council — open teaching and support roles across eight campuses, in an environment built for excellence, growth and continuous development.",
};

const STEPS = [
  { title: "Tell us about you", body: "Share your personal details, experience level and the position you’re applying for." },
  { title: "Upload your CV", body: "A CV is required; a cover letter is optional but always welcome." },
  { title: "Hear back", body: "Our team reviews every application and responds within 1–2 business days." },
];

export default function CareersPage() {
  return (
    <>
      <section className="page-hero has-media">
        <div className="page-hero-media">
          <Image
            src="/images/techhub.jpg"
            alt="A Corona Schools teacher leading a robotics lesson on an interactive smartboard"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap">
          <span className="eyebrow on-dark">Careers</span>
          <h1>Teach the students<br />who&rsquo;ll teach the future.</h1>
          <p className="lede">We build an enabling environment of excellence, growth and continuous development for our staff — and our alumni&rsquo;s track record shows the results, across sectors, worldwide.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Open Categories</span>
            <h2>Where you could join us.</h2>
            <p className="lede">Current hiring spans these categories across our eight campuses. Don&rsquo;t see your exact role — reach out anyway.</p>
          </Reveal>
          <Reveal className="roles-panel mt-0">
            <div className="roles-list">
              {CAREER_ROLES.map((role) => (
                <div className="role-chip" key={role}>
                  {role} <Icon name="briefcase" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow tone-indigo">How to Apply</span>
            <h2>A simple, three-step process.</h2>
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

      <section>
        <div className="wrap">
          <Reveal as="div" className="admissions-cta mt-0">
            <div className="admissions-inner" style={{ gridTemplateColumns: "1fr", textAlign: "center", justifyItems: "center" }}>
              <div>
                <span className="eyebrow" style={{ color: "#FFD9D6" }}>Get In Touch</span>
                <h2>Ready to apply?</h2>
                <p className="lede" style={{ margin: "16px auto 0" }}>
                  Email your CV to{" "}
                  <a href={`mailto:${CENTRAL_OFFICE.email}`} style={{ color: "#fff", textDecoration: "underline" }}>{CENTRAL_OFFICE.email}</a>
                  {" "}or call {CENTRAL_OFFICE.phones[0]} — we respond within 1–2 business days.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
