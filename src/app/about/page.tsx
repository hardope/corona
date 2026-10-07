import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { BOARD_OF_TRUSTEES, GOVERNING_BOARD, EXECUTIVE_MANAGEMENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "/about" },
  description:
    "The history, mission and leadership of Corona Schools' Trust Council, including the Board of Trustees, the Governing Board and the executive management team.",
};

const TIMELINE = [
  { year: "1955", title: "Corona Schools’ Trust Council founded", body: "The Trust Council is established in Lagos." },
  { year: "1960", title: "Corona School, Gbagada opens", body: "One of our oldest primary schools, and still open today." },
  { year: "2017", title: "NEASC accreditation", body: "Corona Secondary School, Agbara becomes the only secondary school in Africa accredited by the New England Association of Schools and Colleges." },
  { year: "2019", title: "British Council award", body: "Corona Schools wins the British Council Community Initiative Award for a student-led water borehole project." },
  { year: "2025", title: "70th anniversary", body: "The Trust Council turns 70, with eight schools in Lagos and Ogun State." },
  { year: "2026", title: "TechHub opens", body: "The Alumni Association opens a new TechHub at the Ibeju-Lekki campus as its 70th anniversary legacy project." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero has-media">
        <div className="page-hero-media">
          <Image
            src="/images/secondary-students.jpg"
            alt="Two Corona Schools secondary students in blazers holding the school's mission statement booklets in a corridor"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap">
          <span className="eyebrow on-dark">About Us</span>
          <h1>Educating Nigerian<br />children since 1955</h1>
          <p className="lede">Corona Schools&rsquo; Trust Council offers pre-school, primary, secondary and tertiary education. Today it runs eight schools in Lagos and Ogun State.</p>
        </div>
      </section>

      <section>
        <div className="wrap about-grid">
          <Reveal as="div" className="mt-0">
            <span className="eyebrow">Our Purpose</span>
            <h2>Mission and vision</h2>
            <p className="mission-quote">
              &ldquo;To provide world-class education to children. We inculcate high moral and ethical
              values in our students as we prepare them for lifelong learning, service and
              fulfilment.&rdquo;
            </p>
            <p className="vision-text">
              &ldquo;To be Nigeria&rsquo;s leading educational institution focused on and dedicated to
              producing well-rounded and proudly Nigerian young men and women equipped for continuous
              learning, personal mastery and leadership.&rdquo;
            </p>
            <p className="vision-text" style={{ marginTop: 14 }}>
              Today we have eight schools, more than 35,000 current and past students and over 700
              staff. 15% of our students come from outside Nigeria, and 37% win scholarships to study
              abroad.
            </p>
          </Reveal>
          <Reveal className="mt-0">
            <span className="eyebrow tone-indigo">Our History</span>
            <h2 style={{ marginBottom: 28 }}>Key dates since 1955</h2>
            <div className="timeline">
              {TIMELINE.map((item) => (
                <div className="timeline-item" key={item.year}>
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="board" className="alt">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Governance</span>
            <h2>Board and leadership</h2>
            <p className="lede">Corona Schools&rsquo; Trust Council is governed by a Board of Trustees and a Governing Board, and run day-to-day by an Executive Management team.</p>
          </Reveal>

          <Reveal className="roster mt-0">
            <div className="roster-group">
              <h3>Board of Trustees</h3>
              <div className="roster-grid">
                {BOARD_OF_TRUSTEES.map((p) => (
                  <div className="roster-card" key={p.name}>
                    <span className="name">{p.name}</span>
                    <span className="role">{p.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="roster-group">
              <h3>Governing Board</h3>
              <p>Chaired by Mr. Olaniyi Yusuf, with additional members and five PTA representatives.</p>
              <div className="roster-grid">
                {GOVERNING_BOARD.map((p) => (
                  <div className="roster-card" key={p.name}>
                    <span className="name">{p.name}</span>
                    <span className="role">{p.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="roster-group">
              <h3>Executive Management</h3>
              <div className="roster-grid">
                {EXECUTIVE_MANAGEMENT.map((p) => (
                  <div className="roster-card" key={p.name}>
                    <span className="name">{p.name}</span>
                    <span className="role">{p.role}</span>
                  </div>
                ))}
              </div>
            </div>
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
                <p className="lede" style={{ margin: "16px auto 0" }}>See all eight of our schools, or contact our central office with any questions.</p>
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
