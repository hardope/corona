import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { SCHOOLS } from "@/lib/content";

export default function HomePage() {
  const early = SCHOOLS.filter((s) => s.stage === "Nursery" || s.stage === "Primary");
  const secondary = SCHOOLS.filter((s) => s.stage === "Secondary" || s.stage === "Boarding");
  const tertiary = SCHOOLS.filter((s) => s.stage === "Tertiary");

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/hero.jpg"
            alt="Two Corona Schools secondary students in lab coats examining a specimen under a microscope during a science lesson"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="wrap hero-inner">
          <span className="eyebrow on-dark">Corona Schools&rsquo; Trust Council &middot; Est. 1955</span>
          <h1>An Odyssey<br />of Influence</h1>
          <p className="lede">
            Seven decades of shaping Nigeria&rsquo;s next generation — from Montessori nursery through
            blended Nigerian, British and international curricula, to a college of education. Eight
            campuses. One standard of excellence.
          </p>
          <div className="hero-ctas">
            <Link href="/admissions" className="btn btn-primary">Begin Admissions <Icon name="arrow" /></Link>
            <Link href="/schools" className="btn btn-ghost-light">Explore Our Schools</Link>
          </div>
        </div>
      </section>

      <div className="stats-panel">
        <div className="wrap">
          <Reveal className="stats-grid mt-0">
            <div className="stat"><div className="stat-num">70</div><div className="stat-label">Years of educational leadership</div></div>
            <div className="stat"><div className="stat-num">8</div><div className="stat-label">Schools under one Trust Council</div></div>
            <div className="stat"><div className="stat-num">35K+</div><div className="stat-label">Alumni across the world</div></div>
            <div className="stat"><div className="stat-num">600+</div><div className="stat-label">Educators and staff</div></div>
          </Reveal>
        </div>
      </div>

      {/* ABOUT / MISSION */}
      <section id="about">
        <div className="wrap about-grid">
          <Reveal as="figure" className="about-media mt-0">
            <div className="about-media-frame">
              <Image
                src="/images/about.jpg"
                alt="Two Corona Schools pupils in Ankara-print uniforms smiling in a corridor, holding textbooks"
                fill
                sizes="(min-width: 900px) 40vw, 100vw"
              />
            </div>
            <figcaption>Pupils at Corona School, Lekki</figcaption>
          </Reveal>
          <Reveal>
            <span className="eyebrow">Our Mission</span>
            <h2>Educating for life,<br />not just for exams.</h2>
            <p className="mission-quote">
              &ldquo;To provide world-class education to children. We inculcate high moral and ethical
              values in our students as we prepare them for lifelong learning, service and
              fulfilment.&rdquo;
            </p>
            <p className="vision-text">
              Our vision is to stand as Nigeria&rsquo;s leading educational institution — producing
              well-rounded, proudly Nigerian young men and women equipped for continuous learning,
              personal mastery and principled leadership.
            </p>
            <ul className="value-list">
              <li>
                <span className="value-num">01</span>
                <div><h4>World-class academics</h4><p>Blended Nigerian, British and international curricula, benchmarked to Cambridge standards.</p></div>
              </li>
              <li>
                <span className="value-num">02</span>
                <div><h4>Character formation</h4><p>High moral and ethical values instilled alongside academic rigor, in and out of the classroom.</p></div>
              </li>
              <li>
                <span className="value-num">03</span>
                <div><h4>A global outlook</h4><p>An international community — 15% of our pupils join us from beyond Nigeria&rsquo;s borders.</p></div>
              </li>
            </ul>
            <Link href="/about" className="btn btn-outline" style={{ marginTop: 30 }}>More about the Trust Council <Icon name="arrow" /></Link>
          </Reveal>
        </div>
      </section>

      {/* 70 HERITAGE BAND */}
      <section className="heritage">
        <div className="heritage-tex" />
        <div className="wrap">
          <Reveal as="div" className="heritage-num mt-0">70</Reveal>
          <Reveal className="heritage-copy">
            <span className="eyebrow on-dark">Since 1955</span>
            <h2>Seven decades of a legacy in motion.</h2>
            <p className="lede">
              What began in 1955 has grown into one of Nigeria&rsquo;s most trusted names in education —
              eight schools, one tertiary college, and a community of over 35,000 alumni carrying the
              same standard into the world.
            </p>
            <p className="heritage-tagline">&ldquo;A Legacy of World-Class Education&rdquo;</p>
          </Reveal>
        </div>
      </section>

      {/* CURRICULUM PATHWAY */}
      <section id="curriculum">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">The Corona Pathway</span>
            <h2>One continuous journey, four stages.</h2>
            <p className="lede">Every pupil moves through a single, deliberately connected pathway — each stage built to prepare them for the next.</p>
          </Reveal>
          <Reveal className="pathway mt-0">
            <div className="path-step">
              <span className="step-no">01</span>
              <h3>Nursery</h3>
              <span className="step-tag">The Montessori Method</span>
              <p>Foundational years built on independence, sensory learning and guided discovery.</p>
            </div>
            <div className="path-step">
              <span className="step-no">02</span>
              <h3>Primary</h3>
              <span className="step-tag">Nigerian &amp; International Curricula</span>
              <p>The Nigerian curriculum blended with the International Primary Curriculum, used in 80+ countries.</p>
            </div>
            <div className="path-step">
              <span className="step-no">03</span>
              <h3>Secondary</h3>
              <span className="step-tag">Nigerian &amp; British Curricula</span>
              <p>JSSCE and WASSCE alongside Cambridge International and IGCSE, plus ACCA Foundation-level study.</p>
            </div>
            <div className="path-step">
              <span className="step-no">04</span>
              <h3>Tertiary</h3>
              <span className="step-tag">College of Education, Apapa</span>
              <p>Training the next generation of Nigerian educators to carry the standard forward.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCHOOLS DIRECTORY */}
      <section id="schools" className="alt">
        <div className="wrap">
          <Reveal as="figure" className="schools-banner mt-0">
            <Image
              src="/images/campus.jpg"
              alt="Aerial view of a Corona Schools courtyard with pupils and a teacher playing games on a colourful sports court"
              fill
              sizes="100vw"
            />
            <div className="schools-banner-copy">
              <span className="eyebrow on-dark">Eight Campuses</span>
              <h2 style={{ color: "#fff", marginTop: ".4em" }}>Wherever you find Corona,<br />you find the same standard.</h2>
            </div>
          </Reveal>

          <Reveal className="directory mt-0">
            <div className="directory-group">
              <h3>Early Years &amp; Primary</h3>
              <ul>
                {early.map((s) => (
                  <li key={s.name}>{s.name.replace("Corona ", "")} <span className="tag">{s.stage}</span></li>
                ))}
              </ul>
            </div>
            <div className="directory-group">
              <h3>Secondary</h3>
              <ul>
                {secondary.map((s) => (
                  <li key={s.name}>{s.name.replace("Corona ", "")} <span className="tag">{s.stage}</span></li>
                ))}
              </ul>
            </div>
            <div className="directory-group">
              <h3>Tertiary</h3>
              <ul>
                {tertiary.map((s) => (
                  <li key={s.name}>{s.name.replace("Corona ", "")} <span className="tag">{s.stage}</span></li>
                ))}
              </ul>
              <Link href="/schools" className="btn btn-outline" style={{ marginTop: 28 }}>Full directory &amp; contacts <Icon name="arrow" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECHHUB / INNOVATION */}
      <section id="techhub">
        <div className="wrap">
          <Reveal className="split mt-0">
            <div className="split-media">
              <Image
                src="/images/techhub.jpg"
                alt="A Corona Schools teacher leading a robotics lesson on an interactive smartboard while two students work at laptops"
                fill
                sizes="(min-width: 900px) 45vw, 100vw"
              />
            </div>
            <div>
              <span className="eyebrow tone-indigo">Innovation</span>
              <h2>A Microsoft Showcase School, built for what&rsquo;s next.</h2>
              <p className="lede">Our TechHub gives pupils hands-on access to robotics and computing — building on recent competition success and a teaching staff fluent in the tools of tomorrow.</p>
              <div className="badge-row">
                <span className="pill"><strong>158</strong>&nbsp;Microsoft Innovative Educator Experts</span>
                <span className="pill"><strong>187</strong>&nbsp;Microsoft Certified Educators</span>
              </div>
              <Link href="/techhub" className="btn btn-outline" style={{ marginTop: 30 }}>More on TechHub <Icon name="arrow" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DISTINCTIONS */}
      <section className="alt" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Distinctions</span>
            <h2>Recognized where it matters most.</h2>
          </Reveal>
        </div>
        <Reveal as="div" className="distinctions mt-0">
          <div className="distinctions-media">
            <Image
              src="/images/achievements.jpg"
              alt="Corona School Gbagada's Class of 2024 prefects posing in maroon blazers on the school's garden amphitheatre"
              fill
              sizes="100vw"
            />
          </div>
          <div className="distinctions-panel">
            <div className="wrap" style={{ padding: 0 }}>
              <ul className="distinctions-list">
                <li><Icon name="check" className="dist-mark" /><div><b>NEASC Accreditation</b>Held since 2017 — the only African secondary school to hold this distinction, Corona Secondary School, Agbara.</div></li>
                <li><Icon name="check" className="dist-mark" /><div><b>ACCA Foundation-Level Study</b>The only Nigerian secondary school offering this qualification pathway.</div></li>
                <li><Icon name="check" className="dist-mark" /><div><b>British Council Award, 2019</b>Recognized for outstanding community initiative.</div></li>
                <li><Icon name="check" className="dist-mark" /><div><b>Microsoft Showcase School</b>One of a select group of schools worldwide.</div></li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CO-CURRICULAR */}
      <section>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Beyond the Classroom</span>
            <h2>A full life, not just a full timetable.</h2>
          </Reveal>
          <Reveal className="life-grid mt-0">
            <div className="life-card">
              <Image src="/images/cocurr-martial-arts.jpg" alt="Young Corona Schools pupils in taekwondo uniforms practising a martial arts stance" fill sizes="(min-width: 700px) 33vw, 100vw" />
              <span>Martial Arts</span>
            </div>
            <div className="life-card">
              <Image src="/images/cocurr-ballet.jpg" alt="Young Corona Schools pupils in white tutus performing a ballet routine on stage" fill sizes="(min-width: 700px) 33vw, 100vw" />
              <span>Performing Arts</span>
            </div>
            <div className="life-card">
              <Image src="/images/cocurr-basketball.jpg" alt="A Corona Schools pupil taking a shot during a basketball session on an outdoor court" fill sizes="(min-width: 700px) 33vw, 100vw" />
              <span>Athletics</span>
            </div>
          </Reveal>
          <Reveal as="p" className="life-note mt-0">
            Music, golf, cheerleading, martial arts, Model United Nations, STEAM and multiple languages
            sit alongside a full sporting calendar — including four Tag-Rugby championship titles for
            Corona School, Gbagada.
          </Reveal>
        </div>
      </section>

      {/* RECOGNITION + MEDIA */}
      <section className="alt">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Recognized &amp; Accredited By</span>
          </Reveal>
          <Reveal className="logo-strip mt-0">
            {/* eslint-disable @next/next/no-img-element */}
            <img src="/images/logos/cambridge.png" alt="University of Cambridge International Examinations logo" loading="lazy" />
            <img src="/images/logos/ipc.png" alt="International Primary Curriculum logo" loading="lazy" />
            <img src="/images/logos/aisa.png" alt="Association of International Schools in Africa logo" loading="lazy" />
            <img src="/images/logos/aisen.png" alt="Association of International Schools in Nigeria logo" loading="lazy" />
            <img src="/images/logos/britishcouncil.png" alt="British Council Nigeria logo" loading="lazy" />
            <img src="/images/logos/aspen.jpg" alt="ASPEN logo" loading="lazy" />
            {/* eslint-enable @next/next/no-img-element */}
          </Reveal>
          <div className="media-row">
            <span>CNN</span><span>BusinessDay</span><span>Nigeria Tribune</span><span>ThisDay</span><span>Vanguard</span>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Latest News</span>
            <h2>From across the Trust Council.</h2>
          </Reveal>
          <Reveal className="news-grid mt-0">
            <article className="news-card">
              <div className="news-media">
                <Image src="/images/graduation.jpg" alt="Class of 2026 graduates and staff of Corona Schools posing on the lawn for a formal graduation portrait" fill sizes="(min-width: 860px) 33vw, 100vw" />
              </div>
              <div className="news-body">
                <span className="news-tag">Graduation</span>
                <h3>Class of 2026 graduates</h3>
                <p>Our newest cohort of graduands step out into the world, ready to carry the Corona standard forward.</p>
              </div>
            </article>
            <article className="news-card tone-indigo">
              <div className="news-media"><span className="mark"><Icon name="flame" /></span></div>
              <div className="news-body">
                <span className="news-tag" style={{ color: "var(--indigo)" }}>Innovation</span>
                <h3>TechHub officially unveiled</h3>
                <p>Our new innovation centre opens its doors, following a strong showing at a recent robotics competition.</p>
              </div>
            </article>
            <article className="news-card tone-crimson">
              <div className="news-media"><span className="mark"><Icon name="flame" /></span></div>
              <div className="news-body">
                <span className="news-tag">Community</span>
                <h3>Partnering for children&rsquo;s hearts</h3>
                <p>A new charitable partnership is helping fund life-saving heart surgeries for children in need.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section id="admissions">
        <div className="wrap">
          <Reveal as="div" className="admissions-cta mt-0">
            <div className="admissions-inner">
              <div>
                <span className="eyebrow" style={{ color: "#FFD9D6" }}>Admissions Open &middot; 2025/2026</span>
                <h2>Your child&rsquo;s odyssey<br />starts here.</h2>
                <p className="lede">Entrance is open for Years 7–11, including scholarship entrance examinations. Choose your school and apply online, with day and boarding options available.</p>
                <div className="admissions-ctas">
                  <Link href="/admissions" className="btn btn-white">Start Your Application <Icon name="arrow" /></Link>
                  <Link href="/contact" className="btn btn-on-crimson">Talk to Admissions</Link>
                </div>
              </div>
              <ul className="admissions-facts">
                <li><Icon name="check" /> Scholarship entrance examinations available</li>
                <li><Icon name="check" /> Day and boarding options across campuses</li>
                <li><Icon name="check" /> Blended Nigerian, British &amp; international curricula</li>
                <li><Icon name="check" /> NEASC-accredited secondary education</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
