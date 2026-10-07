import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { OrganizationJsonLd } from "@/components/OrganizationJsonLd";
import { SCHOOLS } from "@/lib/content";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const early = SCHOOLS.filter((s) => s.stage === "Nursery" || s.stage === "Primary");
  const secondary = SCHOOLS.filter((s) => s.stage === "Secondary" || s.stage === "Boarding");
  const tertiary = SCHOOLS.filter((s) => s.stage === "Tertiary");

  return (
    <>
      <OrganizationJsonLd />

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
          <span className="eyebrow on-dark">Corona Schools&rsquo; Trust Council, founded 1955</span>
          <h1>An Odyssey<br />of Influence</h1>
          <p className="lede">
            For over 70 years we have educated Nigerian children, from Montessori nursery through
            primary and secondary school to our college of education. Today we run eight schools in
            Lagos and Ogun State.
          </p>
          <div className="hero-ctas">
            <Link href="/admissions" className="btn btn-primary">Apply for Admission <Icon name="arrow" /></Link>
            <Link href="/schools" className="btn btn-ghost-light">See Our Schools</Link>
          </div>
        </div>
      </section>

      <div className="stats-panel">
        <div className="wrap">
          <Reveal className="stats-grid mt-0">
            <div className="stat"><div className="stat-num">70</div><div className="stat-label">Years in education</div></div>
            <div className="stat"><div className="stat-num">8</div><div className="stat-label">Schools in Lagos and Ogun State</div></div>
            <div className="stat"><div className="stat-num">35,000+</div><div className="stat-label">Current and past students</div></div>
            <div className="stat"><div className="stat-num">700+</div><div className="stat-label">Academic and non-academic staff</div></div>
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
            <span className="eyebrow">About Us</span>
            <h2>Our mission</h2>
            <p className="mission-quote">
              &ldquo;To provide world-class education to children. We inculcate high moral and ethical
              values in our students as we prepare them for lifelong learning, service and
              fulfilment.&rdquo;
            </p>
            <p className="vision-text">
              Our vision is to be Nigeria&rsquo;s leading educational institution, producing
              well-rounded and proudly Nigerian young men and women equipped for continuous learning,
              personal mastery and leadership.
            </p>
            <ul className="value-list">
              <li>
                <span className="value-num">01</span>
                <div><h4>Academics</h4><p>Nigerian, British and international curricula, including Cambridge IGCSE at secondary level.</p></div>
              </li>
              <li>
                <span className="value-num">02</span>
                <div><h4>Values</h4><p>We teach high moral and ethical standards alongside academic work.</p></div>
              </li>
              <li>
                <span className="value-num">03</span>
                <div><h4>International outlook</h4><p>15% of our students come from outside Nigeria, and 37% go on to win scholarships to study abroad.</p></div>
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
            <h2>70 years in Nigerian education</h2>
            <p className="lede">
              Corona Schools&rsquo; Trust Council was founded in 1955. It now runs eight schools, from
              crèche to a college of education, and more than 35,000 students have studied with us.
            </p>
            <p className="heritage-tagline">&ldquo;A Legacy of World-Class Education&rdquo;</p>
          </Reveal>
        </div>
      </section>

      {/* CURRICULUM PATHWAY */}
      <section id="curriculum">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Curriculum</span>
            <h2>What we teach at each stage</h2>
            <p className="lede">A child can join a Corona nursery and stay with us to the end of secondary school.</p>
          </Reveal>
          <Reveal className="pathway mt-0">
            <div className="path-step">
              <span className="step-no">01</span>
              <h3>Nursery</h3>
              <span className="step-tag">The Montessori Method</span>
              <p>We use the Montessori method to support children&rsquo;s learning in every curriculum area.</p>
            </div>
            <div className="path-step">
              <span className="step-no">02</span>
              <h3>Primary</h3>
              <span className="step-tag">Nigerian &amp; International Curricula</span>
              <p>The Nigerian curriculum combined with the International Primary Curriculum (IPC).</p>
            </div>
            <div className="path-step">
              <span className="step-no">03</span>
              <h3>Secondary</h3>
              <span className="step-tag">Nigerian &amp; British Curricula</span>
              <p>JSSCE and WASSCE alongside Cambridge IGCSE. Students can also take the ACCA Foundation level.</p>
            </div>
            <div className="path-step">
              <span className="step-no">04</span>
              <h3>Tertiary</h3>
              <span className="step-tag">College of Education, Apapa</span>
              <p>Courses for aspiring teachers, education consultants and school owners.</p>
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
              <span className="eyebrow on-dark">Our Schools</span>
              <h2 style={{ color: "#fff", marginTop: ".4em" }}>Eight schools in<br />Lagos and Ogun State</h2>
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
              <span className="eyebrow tone-indigo">Technology</span>
              <h2>A Microsoft Showcase School</h2>
              <p className="lede">Our new TechHub at the Ibeju-Lekki campus gives students space for coding, robotics and digital learning. The Alumni Association set it up as its 70th anniversary legacy project.</p>
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
            <h2>Awards and accreditation</h2>
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
                <li><Icon name="check" className="dist-mark" /><div><b>NEASC accreditation</b>Since 2017, Corona Secondary School, Agbara has been the only secondary school in Africa accredited by NEASC.</div></li>
                <li><Icon name="check" className="dist-mark" /><div><b>ACCA Foundation level</b>Our students are the only secondary school students in Nigeria to have passed the ACCA Foundation level.</div></li>
                <li><Icon name="check" className="dist-mark" /><div><b>British Council award, 2019</b>The Community Initiative Award, for a student-led project to provide a water borehole.</div></li>
                <li><Icon name="check" className="dist-mark" /><div><b>Microsoft Showcase School</b>Recognised by Microsoft for the way we use technology in teaching.</div></li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CO-CURRICULAR */}
      <section>
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">Co-curricular</span>
            <h2>Sports, arts and clubs</h2>
          </Reveal>
          <Reveal className="life-grid mt-0">
            <div className="life-card">
              <Image src="/images/cocurr-martial-arts.jpg" alt="Young Corona Schools pupils in taekwondo uniforms practising a martial arts stance" fill sizes="(min-width: 700px) 33vw, 100vw" />
              <span>Taekwondo</span>
            </div>
            <div className="life-card">
              <Image src="/images/cocurr-ballet.jpg" alt="Young Corona Schools pupils in white tutus performing a ballet routine on stage" fill sizes="(min-width: 700px) 33vw, 100vw" />
              <span>Ballet</span>
            </div>
            <div className="life-card">
              <Image src="/images/cocurr-basketball.jpg" alt="A Corona Schools pupil taking a shot during a basketball session on an outdoor court" fill sizes="(min-width: 700px) 33vw, 100vw" />
              <span>Basketball</span>
            </div>
          </Reveal>
          <Reveal as="p" className="life-note mt-0">
            Other activities include music, golf, chess, drama, cheerleading, debating, Model United
            Nations, STEAM, animation, and languages including French, German, Hausa, Igbo and Yoruba.
            Corona School, Gbagada has won the Lagos State Tag-Rugby trophy four times.
          </Reveal>
        </div>
      </section>

      {/* RECOGNITION + MEDIA */}
      <section className="alt">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0" style={{ marginBottom: 36 }}>
            <span className="eyebrow">Partners and Accreditation</span>
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
            <p className="media-label">We have been featured in</p>
            <span>CNN</span><span>ThisDay</span><span>Vanguard</span><span>The Sun</span><span>Nigerian Tribune</span><span>Legit.ng</span><span>PM News</span>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section id="news">
        <div className="wrap">
          <Reveal as="div" className="section-head mt-0">
            <span className="eyebrow">News</span>
            <h2>Latest from our schools</h2>
          </Reveal>
          <Reveal className="news-grid mt-0">
            <article className="news-card">
              <div className="news-media">
                <Image src="/images/graduation.jpg" alt="Class of 2026 graduates and staff of Corona Schools posing on the lawn for a formal graduation portrait" fill sizes="(min-width: 860px) 33vw, 100vw" />
              </div>
              <div className="news-body">
                <span className="news-tag">Graduation</span>
                <h3>CSS Agbara Class of 2026 graduates</h3>
                <p>The class graduated under the theme &ldquo;Shaped by Diversity, Defined by Distinction&rdquo;, with family, staff and friends in attendance.</p>
              </div>
            </article>
            <article className="news-card tone-indigo">
              <div className="news-media"><span className="mark"><Icon name="flame" /></span></div>
              <div className="news-body">
                <span className="news-tag" style={{ color: "var(--indigo)" }}>Technology</span>
                <h3>TechHub opens at Ibeju-Lekki</h3>
                <p>The new TechHub is the Alumni Association&rsquo;s legacy project for our 70th anniversary.</p>
              </div>
            </article>
            <article className="news-card tone-crimson">
              <div className="news-media"><span className="mark"><Icon name="flame" /></span></div>
              <div className="news-body">
                <span className="news-tag">Community</span>
                <h3>Raising funds for children&rsquo;s heart surgery</h3>
                <p>With the charity From My Heart For Your Heart, we raised ₦11,374,645 for open-heart surgery for children with congenital heart disease.</p>
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
                <span className="eyebrow" style={{ color: "#FFD9D6" }}>2026/2027 Admissions</span>
                <h2>Generations have thrived here.<br />It&rsquo;s your child&rsquo;s turn.</h2>
                <p className="lede">Registration for the entrance examination into Years 7 to 11 is open, for day and boarding places. We also admit children into other classes throughout the year.</p>
                <div className="admissions-ctas">
                  <Link href="/admissions" className="btn btn-white">Apply Now <Icon name="arrow" /></Link>
                  <Link href="/contact" className="btn btn-on-crimson">Contact Admissions</Link>
                </div>
              </div>
              <ul className="admissions-facts">
                <li><Icon name="check" /> Entrance exam registration open for Years 7 to 11</li>
                <li><Icon name="check" /> Weekly and full boarding at secondary level</li>
                <li><Icon name="check" /> Nigerian, British and international curricula</li>
                <li><Icon name="check" /> NEASC-accredited secondary school at Agbara</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
