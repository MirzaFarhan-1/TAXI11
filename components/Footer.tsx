const TaxiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
    <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h11l4 4 1 4H5" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="16.5" cy="17.5" r="1.5" />
  </svg>
);

const services = [
  { label: 'Airport Transfers St Andrews', href: '#services' },
  { label: 'Golf Taxi St Andrews', href: '#services' },
  { label: 'Wedding Transport Fife', href: '#services' },
  { label: 'Hospital Taxi Fife', href: '#services' },
  { label: 'University of St Andrews Taxi', href: '#services' },
  { label: 'Late Night Taxi St Andrews', href: '#services' },
];

const coverage = [
  { label: 'St Andrews KY16', href: '#coverage' },
  { label: 'Edinburgh Airport Transfers', href: '#coverage' },
  { label: 'Dundee Taxi', href: '#coverage' },
  { label: 'Glasgow Airport Taxi', href: '#coverage' },
  { label: 'East Neuk of Fife', href: '#coverage' },
  { label: 'All of Fife', href: '#coverage' },
];

const info = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Fleet', href: '#fleet' },
  { label: 'Book a Taxi', href: '#booking' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="logo" style={{ marginBottom: 14, display: 'inline-flex' }}>
              <div className="logo-icon"><TaxiIcon /></div>
              <div className="logo-text">
                <strong>St Andrews Taxis</strong>
                <span>24/7 Private Hire</span>
              </div>
            </a>
            <p>
              Your reliable, professional taxi and private hire service in St Andrews, Fife,
              Scotland. 24/7 airport transfers, golf taxis, wedding transport and local journeys.
              Licensed by Fife Council. Available 365 days a year.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn" aria-label="Facebook">f</a>
              <a href="#" className="social-btn" aria-label="Twitter">𝕏</a>
              <a href="#" className="social-btn" aria-label="Instagram">in</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              {services.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4>Coverage</h4>
            <ul className="footer-links">
              {coverage.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4>Info</h4>
            <ul className="footer-links">
              {info.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} St Andrews 24/7 Taxi Service. All rights reserved.
            Fife Council Licensed Private Hire. Registered in Scotland.
          </span>
          <span>
            South Street, Bell St, St Andrews KY16 9UR &nbsp;&middot;&nbsp;{' '}
            <a href="tel:07981100009">07981 100009</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
