import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icons";
import { SchoolContactCard } from "@/components/SchoolContactCard";
import { CENTRAL_OFFICE, SCHOOLS, SOCIAL_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach Corona Schools' Trust Council's central office or any of our eight campuses directly — addresses, phone numbers and email for every school.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Contact Us</span>
          <h1>Give your child<br />a world-class education.</h1>
          <p className="lede">Reach our central office, or go straight to the campus you&rsquo;re interested in — every school has its own direct line.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="contact-grid mt-0">
            <div className="contact-card contact-hero-card">
              <h3>{CENTRAL_OFFICE.name}</h3>
              <span className="contact-tag">Head Office</span>
              <ul>
                <li><Icon name="pin" /><span>{CENTRAL_OFFICE.address}</span></li>
                <li><Icon name="phone" /><a href={`tel:${CENTRAL_OFFICE.phones[0].replace(/[^+\d]/g, "")}`}>{CENTRAL_OFFICE.phones.join(" · ")}</a></li>
                <li><Icon name="mail" /><a href={`mailto:${CENTRAL_OFFICE.email}`}>{CENTRAL_OFFICE.email}</a></li>
                <li><Icon name="clock" /><span>{CENTRAL_OFFICE.hours}</span></li>
              </ul>
              <div className="foot-social" style={{ marginTop: 20 }}>
                {SOCIAL_LINKS.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" style={{ borderColor: "rgba(244,233,224,.3)", color: "var(--feature-cream)" }}>
                    <Icon name={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {SCHOOLS.map((s) => (
              <SchoolContactCard school={s} key={s.name} />
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
