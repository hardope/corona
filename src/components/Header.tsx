"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icons";
import { NAV_LINKS, CENTRAL_OFFICE } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const transparent = pathname === "/";

  // Close the mobile menu on navigation. Adjusted during render (React's
  // documented pattern for "reset state when a prop changes") rather than
  // in an effect, so it never fires an extra post-commit render.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => document.removeEventListener("scroll", onScroll);
  }, [transparent]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const solid = !transparent || scrolled;

  return (
    <>
      <header className={`site-header${solid ? " is-scrolled" : ""}`}>
        <div className="wrap">
          <Link href="/" className="brand">
            <svg className="brand-mark" viewBox="0 0 48 48"><use href="#i-flame" /></svg>
            <span className="brand-word">
              <strong>Corona Schools&rsquo;</strong>
              <span>Trust Council</span>
            </span>
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "is-active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link href="/admissions" className="btn btn-primary">
              Apply Now <Icon name="arrow" />
            </Link>
            <button
              className="menu-toggle"
              aria-expanded={open}
              aria-controls="mobilePanel"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-panel${open ? " is-open" : ""}`} id="mobilePanel">
        <div className="mp-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mp-meta">
          <span>{CENTRAL_OFFICE.address}</span>
          <span>
            {CENTRAL_OFFICE.phones[0]} &middot; {CENTRAL_OFFICE.email}
          </span>
        </div>
      </div>
    </>
  );
}
