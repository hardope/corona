import Link from "next/link";
import { Icon } from "./Icons";
import { CENTRAL_OFFICE, SOCIAL_LINKS, NAV_LINKS } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <svg className="brand-mark" viewBox="0 0 48 48"><use href="#i-flame" /></svg>
              <span className="brand-word">
                <strong>Corona Schools&rsquo;</strong>
                <span>Trust Council</span>
              </span>
            </Link>
            <p>A Legacy of World-Class Education since 1955 — educating Nigeria&rsquo;s next generation across eight campuses.</p>
            <div className="foot-social">
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="foot-col">
            <h4>Explore</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Trust Council</h4>
            <ul>
              <li><Link href="/about#board">Board &amp; Leadership</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/schools">Our Schools</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Visit</h4>
            <ul className="foot-contact">
              <li><Icon name="pin" /><address>{CENTRAL_OFFICE.address}</address></li>
              <li><Icon name="phone" /><a href={`tel:${CENTRAL_OFFICE.phones[0].replace(/[^+\d]/g, "")}`}>{CENTRAL_OFFICE.phones[0]}</a></li>
              <li><Icon name="mail" /><a href={`mailto:${CENTRAL_OFFICE.email}`}>{CENTRAL_OFFICE.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; {new Date().getFullYear()} Corona Schools&rsquo; Trust Council. All rights reserved.</span>
          <nav className="foot-legal" aria-label="Legal">
            <a href="https://coronaschools.org/privacy-notice/">Privacy Notice</a>
            <a href="https://coronaschools.org/cookies-policy/">Cookie Policy</a>
            <a href="https://coronaschools.org/whistle-blowing-policy/">Whistleblowing Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
