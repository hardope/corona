import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { SchoolContactCard } from "@/components/SchoolContactCard";
import { SCHOOLS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Schools",
  alternates: { canonical: "/schools" },
  description:
    "Corona Schools' eight schools in Lagos and Ogun State, from crèche and nursery to secondary school and a college of education, with contact details for each.",
};

const STAGES = [
  { tag: "Crèche", campuses: "Gbagada, Ikoyi, Lekki and Victoria Island", body: "Our experienced early years staff look after the youngest children." },
  { tag: "Playschool", campuses: "Gbagada, Ikoyi, Lekki and Victoria Island", body: "Children learn basic life skills through play, in a setting designed for their age." },
  { tag: "Nursery", campuses: "Gbagada, Ikoyi, Lekki and Victoria Island", body: "We use the Montessori method, and children start co-curricular activities from nursery." },
  { tag: "Primary", campuses: "Gbagada, Ikoyi, Lekki and Victoria Island", body: "The Nigerian curriculum combined with the International Primary Curriculum (IPC)." },
  { tag: "Secondary", campuses: "Ibeju-Lekki (day and weekly boarding), Agbara (full boarding)", body: "Nigerian and British curricula that prepare students for universities around the world." },
  { tag: "College of Education", campuses: "Apapa", body: "Courses for aspiring teachers, education consultants and school owners." },
];

export default function SchoolsPage() {
  const groups: { title: string; items: typeof SCHOOLS }[] = [
    { title: "Early Years & Primary", items: SCHOOLS.filter((s) => s.stage === "Nursery" || s.stage === "Primary") },
    { title: "Secondary", items: SCHOOLS.filter((s) => s.stage === "Secondary" || s.stage === "Boarding") },
    { title: "Tertiary", items: SCHOOLS.filter((s) => s.stage === "Tertiary") },
  ];

  return (
    <>
      <section className="page-hero has-media">
        <div className="page-hero-media">
          <Image
            src="/images/campus.jpg"
            alt="Aerial view of a Corona Schools courtyard with pupils and a teacher playing games on a colourful sports court"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap">
          <span className="eyebrow on-dark">Our Schools</span>
          <h1>Our schools</h1>
          <p className="lede">Eight schools in Lagos and Ogun State, from crèche to college of education.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Stages</span>
            <h2>From crèche to college</h2>
          </Reveal>
          <Reveal className="stage-grid mt-0">
            {STAGES.map((s) => (
              <div className="stage-card" key={s.tag}>
                <span className="stage-tag">{s.tag}</span>
                <h3>{s.tag}</h3>
                <div className="campuses">{s.campuses}</div>
                <p>{s.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Directory</span>
            <h2>Find a school</h2>
            <p className="lede">Addresses, phone numbers and email addresses for each school.</p>
          </Reveal>

          {groups.map((group) => (
            <div key={group.title} style={{ marginBottom: 48 }}>
              <Reveal as="h3" className="mt-0" style={{ fontSize: ".8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--ink-faint)", paddingBottom: 14, borderBottom: "1px solid var(--line)", fontFamily: "var(--font-body)" }}>
                {group.title}
              </Reveal>
              <Reveal className="contact-grid mt-0">
                {group.items.map((s) => (
                  <SchoolContactCard school={s} key={s.name} />
                ))}
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="admissions-cta mt-0">
            <div className="admissions-inner" style={{ gridTemplateColumns: "1fr", textAlign: "center", justifyItems: "center" }}>
              <div>
                <span className="eyebrow" style={{ color: "#FFD9D6" }}>Admissions</span>
                <h2>Apply for a place</h2>
                <p className="lede" style={{ margin: "16px auto 0" }}>Registration for the 2026/2027 entrance examination into Years 7 to 11 is open.</p>
                <div className="admissions-ctas" style={{ justifyContent: "center" }}>
                  <Link href="/admissions" className="btn btn-white">Apply Now <Icon name="arrow" /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
