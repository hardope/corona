import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { BOARD_OF_TRUSTEES, GOVERNING_BOARD, EXECUTIVE_MANAGEMENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The history, mission, board of trustees and executive management of Corona Schools' Trust Council — educating Nigeria's next generation since 1955.",
};

const TIMELINE = [
  { year: "1955", title: "Corona Schools’ Trust Council founded", body: "The Trust Council opens its doors in Lagos, beginning seven decades of continuous operation." },
  { year: "1960", title: "Corona School, Gbagada opens", body: "One of the Trust Council’s earliest primary schools, still teaching today." },
  { year: "2017", title: "NEASC accreditation", body: "Corona Secondary School, Agbara becomes the only African secondary school accredited by the New England Association of Schools and Colleges." },
  { year: "2019", title: "British Council Award", body: "Recognized with the British Council Community Initiative Award for outstanding community impact." },
  { year: "2025", title: "70th Anniversary", body: "The Trust Council celebrates seventy years of educational leadership across eight campuses." },
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
          <h1>Seven decades<br />of purpose.</h1>
          <p className="lede">Since 1955, Corona Schools&rsquo; Trust Council has grown from a single Lagos school into a trust of eight institutions — guided by the same board, the same standard, and the same mission.</p>
        </div>
      </section>

      <section>
        <div className="wrap about-grid">
          <Reveal as="div" className="mt-0">
            <span className="eyebrow">Mission &amp; Vision</span>
            <h2>What we set out to do.</h2>
            <p className="mission-quote">
              &ldquo;To provide world-class education to children. We inculcate high moral and ethical
              values in our students as we prepare them for lifelong learning, service and
              fulfilment.&rdquo;
            </p>
            <p className="vision-text">
              &ldquo;To be Nigeria&rsquo;s leading educational institution&hellip; producing well-rounded
              and proudly Nigerian young men and women equipped for continuous learning, personal
              mastery and leadership.&rdquo;
            </p>
            <p className="vision-text" style={{ marginTop: 14 }}>
              Today that means 70+ years of operation, eight schools, over 35,000 alumni, and a
              community where 15% of pupils join from beyond Nigeria&rsquo;s borders and 37% go on to
              scholarships for study overseas.
            </p>
          </Reveal>
          <Reveal className="mt-0">
            <span className="eyebrow tone-indigo">Our History</span>
            <h2 style={{ marginBottom: 28 }}>Seven decades, five milestones.</h2>
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
            <h2>Board &amp; leadership.</h2>
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
                <span className="eyebrow tone-feature">Join Us</span>
                <h2>Ready to see it for yourself?</h2>
                <p className="lede" style={{ margin: "16px auto 0" }}>Explore our eight campuses, meet the team, or start an application today.</p>
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
