'use client';
import { useState } from 'react';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const TaxiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
    <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h11l4 4 1 4H5" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="16.5" cy="17.5" r="1.5" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#coverage', label: 'Coverage' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" className="logo" aria-label="St Andrews Taxis Home">
          <div className="logo-icon"><TaxiIcon /></div>
          <div className="logo-text">
            <strong>St Andrews Taxis</strong>
            <span>24/7 Private Hire</span>
          </div>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="tel:07981100009" className="nav-call" aria-label="Call St Andrews Taxis">
          <PhoneIcon />
          07981 100009
        </a>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="tel:07981100009" className="btn" style={{ marginTop: 8 }}>
          Call 07981 100009
        </a>
      </div>
    </nav>
  );
}
