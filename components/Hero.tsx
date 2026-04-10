'use client';
import { useState } from 'react';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const stripItems = [
  'Available 24 / 7',
  'Fixed Price Quotes',
  'Airport Transfers',
  'Professional Drivers',
  'All Areas Covered',
];

export default function Hero() {
  const [pickup, setPickup] = useState('');
  const [dest, setDest] = useState('');
  const [date, setDate] = useState('');
  const [pax, setPax] = useState('1');

  const today = new Date().toISOString().split('T')[0];

  const handleQuickBook = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="St Andrews Taxi Service — Book a taxi 24/7">
      <div className="hero-bg" role="img" aria-label="Professional taxi service in St Andrews, Fife" />

      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="hero-inner animate-fadeup">
          {/* Left copy */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              St Andrews&apos; Most Trusted Taxi &amp; Private Hire
            </div>
            <h1>
              St Andrews Taxi
              <em>24/7, Any Time.</em>
            </h1>
            <p className="hero-serif">
              Professional private hire &amp; airport transfers across St Andrews &amp; Fife —
              Edinburgh Airport, Glasgow Airport, golf courses, weddings and everything in between.
            </p>
            <div className="hero-ctas">
              <a href="tel:07981100009" className="btn" aria-label="Call St Andrews Taxi now">
                Call 07981 100009
              </a>
              <a href="#booking" className="btn btn-outline">
                Book Online
              </a>
            </div>
          </div>

          {/* Quick book card */}
          <div className="hero-book-card">
            <h3>Quick Quote</h3>
            <p>Enter your postcodes to get started</p>

            <div className="hb-group">
              <label htmlFor="hb-pickup">Pick-up Postcode</label>
              <input
                id="hb-pickup"
                type="text"
                placeholder="e.g. KY16 9UR"
                value={pickup}
                onChange={(e) => setPickup(e.target.value.toUpperCase())}
                maxLength={8}
                autoComplete="off"
              />
            </div>
            <div className="hb-group">
              <label htmlFor="hb-dest">Destination Postcode</label>
              <input
                id="hb-dest"
                type="text"
                placeholder="e.g. EH12 9DN"
                value={dest}
                onChange={(e) => setDest(e.target.value.toUpperCase())}
                maxLength={8}
                autoComplete="off"
              />
            </div>
            <div className="hb-row">
              <div className="hb-group">
                <label htmlFor="hb-date">Date</label>
                <input
                  id="hb-date"
                  type="date"
                  value={date}
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="hb-group">
                <label htmlFor="hb-pax">Passengers</label>
                <select id="hb-pax" value={pax} onChange={(e) => setPax(e.target.value)}>
                  {['1','2','3','4','5','6+'].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>
            </div>

            <button className="btn hb-submit" onClick={handleQuickBook}>
              Get Quote &amp; Book →
            </button>

            <div className="hb-divider">or</div>

            <a href="tel:07981100009" className="hb-phone">
              <PhoneIcon />
              Call for instant booking — 07981 100009
            </a>
          </div>
        </div>
      </div>

      {/* Gold strip */}
      <div className="hero-strip">
        <div className="strip-inner">
          {stripItems.map((item) => (
            <div key={item} className="strip-item">
              <CheckIcon />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
