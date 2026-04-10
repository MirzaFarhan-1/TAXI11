import RevealWrapper from './RevealWrapper';

const TaxiIllustration = () => (
  <div style={{
    width: '100%',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    background: 'linear-gradient(135deg,#111 0%,#1a1a1a 50%,#0f0f0f 100%)',
    minHeight: 420,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    border: '1px solid rgba(245,197,24,0.12)',
  }}>
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'repeating-linear-gradient(45deg,rgba(245,197,24,0.03) 0,rgba(245,197,24,0.03) 1px,transparent 1px,transparent 24px)',
    }} />
    <svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg"
      style={{ width: '90%', maxWidth: 400, position: 'relative', zIndex: 1 }}
      aria-label="Professional licensed taxi in St Andrews, Fife"
      role="img">
      <rect x="0" y="240" width="420" height="80" fill="#1a1a1a" />
      <rect x="0" y="238" width="420" height="4" fill="#f5c518" opacity="0.3" />
      {[40,120,200,280,360].map(x => (
        <rect key={x} x={x} y="265" width="40" height="6" fill="#f5c518" opacity="0.25" rx="3" />
      ))}
      <rect x="80" y="180" width="260" height="62" fill="#1e1e1e" rx="8" />
      <path d="M140 180 Q155 140 175 135 L245 135 Q265 140 280 180 Z" fill="#252525" />
      <path d="M155 180 Q163 150 178 145 L242 145 Q257 150 265 180 Z" fill="#0a1a2a" opacity="0.9" />
      <path d="M155 180 Q163 150 178 145 L242 145 Q257 150 265 180 Z" fill="none" stroke="#f5c518" strokeWidth="1" opacity="0.3" />
      <rect x="285" y="148" width="42" height="32" fill="#0a1a2a" rx="4" opacity="0.85" />
      <rect x="285" y="148" width="42" height="32" fill="none" stroke="#f5c518" strokeWidth="0.8" rx="4" opacity="0.25" />
      <line x1="200" y1="180" x2="200" y2="242" stroke="#f5c518" strokeWidth="0.7" opacity="0.2" />
      <line x1="280" y1="180" x2="280" y2="242" stroke="#f5c518" strokeWidth="0.7" opacity="0.2" />
      <circle cx="140" cy="244" r="28" fill="#111" stroke="#f5c518" strokeWidth="2.5" opacity="0.9" />
      <circle cx="140" cy="244" r="16" fill="#1a1a1a" stroke="#f5c518" strokeWidth="1.5" opacity="0.6" />
      <circle cx="140" cy="244" r="5" fill="#f5c518" opacity="0.7" />
      <circle cx="290" cy="244" r="28" fill="#111" stroke="#f5c518" strokeWidth="2.5" opacity="0.9" />
      <circle cx="290" cy="244" r="16" fill="#1a1a1a" stroke="#f5c518" strokeWidth="1.5" opacity="0.6" />
      <circle cx="290" cy="244" r="5" fill="#f5c518" opacity="0.7" />
      <ellipse cx="97" cy="202" rx="12" ry="8" fill="#f5c518" opacity="0.8" />
      <ellipse cx="97" cy="202" rx="8" ry="5" fill="#fff" opacity="0.6" />
      <rect x="335" y="196" width="14" height="10" fill="#c0392b" rx="2" opacity="0.85" />
      <rect x="183" y="120" width="54" height="18" fill="#f5c518" rx="3" />
      <text x="210" y="133" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="10" fill="#000" letterSpacing="1">TAXI</text>
      <ellipse cx="210" cy="245" rx="130" ry="8" fill="#f5c518" opacity="0.06" />
      <text x="210" y="100" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="13" fill="#f5c518" opacity="0.7" fontWeight="300" letterSpacing="3">ST ANDREWS</text>
      <text x="210" y="118" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" fill="#555" letterSpacing="2">PRIVATE HIRE</text>
    </svg>
    <div className="why-image-badge">
      <span className="big">24/7</span>
      <small>Always Available</small>
    </div>
  </div>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const reasons = [
  { title: 'Fully Licensed & Insured', desc: 'All vehicles are fully licensed with Fife Council and carry full public hire insurance.' },
  { title: 'Professional, Vetted Drivers', desc: 'Every driver is PVG-checked, trained and experienced. Smart, courteous and knowledgeable.' },
  { title: 'Fixed, Transparent Prices', desc: 'No surge pricing, no hidden extras. Get a clear price upfront and pay exactly what you\'re quoted.' },
  { title: 'Punctual Every Time', desc: 'We track flights, monitor traffic and arrive on time, every time.' },
  { title: 'Clean, Modern Vehicles', desc: 'Our well-maintained fleet is cleaned and prepared before every journey for your comfort.' },
];

export default function WhyUs() {
  return (
    <section className="why-section" id="about" aria-labelledby="why-heading">
      <div className="container">
        <div className="why-grid">
          <RevealWrapper>
            <div className="why-image">
              <TaxiIllustration />
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="section-eyebrow"><span>Our commitment</span></div>
            <h2 id="why-heading" className="section-title">
              Why Choose <span className="gold">Us?</span>
            </h2>
            <p className="section-sub">
              The trusted choice for residents, visitors, students and businesses throughout
              St Andrews and Fife.
            </p>
            <ul className="why-list">
              {reasons.map((r) => (
                <li key={r.title}>
                  <div className="why-check"><CheckIcon /></div>
                  <div className="why-text">
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
