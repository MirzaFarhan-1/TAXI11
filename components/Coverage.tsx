import RevealWrapper from './RevealWrapper';

const destinations = [
  'Edinburgh Airport (EDI) — approx. 55 miles',
  'Dundee City Centre — approx. 14 miles',
  'Glasgow Airport (GLA) — approx. 75 miles',
  'Perth & Kinross',
  'Cupar, Anstruther, Crail & East Neuk of Fife',
  'Kirkcaldy, Glenrothes & Central Fife',
  'Aberdeen Airport (ABZ) — long distance',
  'Leuchars Train Station & Guardbridge',
  'Kingsbarns, Strathkinness & Boarhills',
  'All St Andrews & Fife golf courses',
];

const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, stroke: 'var(--gold)', flexShrink: 0 }}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 48, height: 48 }}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Coverage() {
  return (
    <section className="coverage-section" id="coverage" aria-labelledby="coverage-heading">
      <div className="container">
        <RevealWrapper>
          <div className="section-eyebrow"><span>Where we go</span></div>
          <h2 id="coverage-heading" className="section-title">
            Areas We <span className="gold">Cover</span>
          </h2>
          <p className="section-sub">
            Based in St Andrews KY16, we cover the whole of Fife and beyond — including all major
            Scottish airports and long-distance destinations.
          </p>
        </RevealWrapper>

        <div className="coverage-grid">
          <RevealWrapper>
            <div className="coverage-map-placeholder">
              <PinIcon />
              <strong style={{ color: '#fff', fontSize: 18 }}>St Andrews, Fife — KY16</strong>
              <span>Central Scotland · East Coast</span>
              <a
                href="https://www.google.com/maps?q=South+Street,+Bell+St,+St+Andrews+KY16+9UR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ marginTop: 12 }}
              >
                View on Google Maps
              </a>
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <h3 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 22, letterSpacing: 2, marginBottom: 18, color: 'var(--gold)' }}>
              Popular Destinations
            </h3>
            <ul className="coverage-list">
              {destinations.map((d) => (
                <li key={d}>
                  <ChevronIcon />
                  {d}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 13, color: 'var(--mid)', marginTop: 16, fontStyle: 'italic' }}>
              Don&apos;t see your destination? Call us on{' '}
              <a href="tel:07981100009" style={{ color: 'var(--gold)' }}>07981 100009</a> — we
              travel further afield for the right journey.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
