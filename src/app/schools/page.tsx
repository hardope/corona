import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { SchoolContactCard } from "@/components/SchoolContactCard";
import { SCHOOLS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Schools",
  description:
    "Eight Corona Schools campuses across Lagos and Ogun State — crèche through college of education, with contact details for every school.",
};

const STAGES = [
  { tag: "Crèche", campuses: "Gbagada · Ikoyi · Lekki · Victoria Island", body: "From the cradle, your children are expertly nurtured by our seasoned early years’ educators." },
  { tag: "Playschool", campuses: "Gbagada · Ikoyi · Lekki · Victoria Island", body: "Children learn basic life skills through age-appropriate, constructive play activities in a nurturing environment." },
  { tag: "Nursery", campuses: "Gbagada · Ikoyi · Lekki · Victoria Island", body: "Co-curricular skills are fostered right from Corona’s pre-schools, within a spacious and serene environment." },
  { tag: "Primary", campuses: "Gbagada · Ikoyi · Lekki · Victoria Island", body: "Confidence, collaboration, creativity, academic excellence and personal development, built during the formative years." },
  { tag: "Secondary", campuses: "Lekki (day / weekly boarding) · Agbara (full boarding)", body: "The springboard for your child to launch into a future where limitless possibilities abound." },
  { tag: "College of Education", campuses: "Apapa", body: "After three generations of student success, training the next generation of educators, education consultants and school administrators." },
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
          <h1>Eight campuses,<br />one standard.</h1>
          <p className="lede">Shaping confident, future-ready students across our trusted network of schools — from crèche to college of education, in Lagos and Ogun State.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">The Corona Pathway</span>
            <h2>Six stages, one continuous journey.</h2>
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
            <span className="eyebrow">Full Directory</span>
            <h2>Find your campus.</h2>
            <p className="lede">Every Corona campus, with direct contact details for admissions and general enquiries.</p>
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
                <h2>Found your school?</h2>
                <p className="lede" style={{ margin: "16px auto 0" }}>Entrance is open for Years 7–11, including scholarship entrance examinations.</p>
                <div className="admissions-ctas" style={{ justifyContent: "center" }}>
                  <Link href="/admissions" className="btn btn-white">Start Your Application <Icon name="arrow" /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
