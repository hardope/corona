import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { CAREER_ROLES, CENTRAL_OFFICE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  alternates: { canonical: "/careers" },
  description:
    "Teaching and non-teaching jobs at Corona Schools' Trust Council's eight schools in Lagos and Ogun State. See the roles we recruit for and how to apply.",
};

const STEPS = [
  { title: "Fill in your details", body: "Your name, contact details, years of experience and the position you’re applying for." },
  { title: "Upload your CV", body: "A CV is required. A cover letter is optional." },
  { title: "Hear back from us", body: "Our team reviews every application and replies within two working days." },
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
          <h1>Work at<br />Corona Schools</h1>
          <p className="lede">We are always looking for experienced, talented teaching and non-teaching staff. We aim to give everyone who works here room to grow and keep developing.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Roles</span>
            <h2>Positions we recruit for</h2>
            <p className="lede">We hire for these roles across our eight schools. If yours isn&rsquo;t listed, you can still apply.</p>
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
            <span className="eyebrow tone-indigo">Applications</span>
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

      <section>
        <div className="wrap">
          <Reveal as="div" className="admissions-cta mt-0">
            <div className="admissions-inner" style={{ gridTemplateColumns: "1fr", textAlign: "center", justifyItems: "center" }}>
              <div>
                <span className="eyebrow" style={{ color: "#FFD9D6" }}>Apply</span>
                <h2>Send us your CV</h2>
                <p className="lede" style={{ margin: "16px auto 0" }}>
                  Email your CV to{" "}
                  <a href={`mailto:${CENTRAL_OFFICE.email}`} style={{ color: "#fff", textDecoration: "underline" }}>{CENTRAL_OFFICE.email}</a>
                  {" "}or call {CENTRAL_OFFICE.phones[0]}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
