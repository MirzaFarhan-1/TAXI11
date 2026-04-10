import RevealWrapper from './RevealWrapper';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: 'Airport Transfers St Andrews',
    desc: "Reliable, punctual transfers to Edinburgh Airport (EDI), Glasgow Airport (GLA), Dundee & Aberdeen airports. Fixed price, flight tracking included — we'll be there when you land.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3" />
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      </svg>
    ),
    title: 'Golf Course Taxi St Andrews',
    desc: 'St Andrews is the home of golf. Let us get you to the Old Course, Castle Course, Kingsbarns or any local course in comfort. We accommodate clubs and luggage with ease.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    title: 'Wedding & Event Transport',
    desc: 'Special occasions deserve special service. Smart, immaculate vehicles and impeccably presented drivers for weddings, parties and corporate events across Fife.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Medical & Hospital Taxi Fife',
    desc: 'Compassionate, patient transport to Ninewells Hospital Dundee, St Andrews Community Hospital and medical facilities across Fife. Punctual and stress-free.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'University of St Andrews Taxi',
    desc: "Serving the University of St Andrews community — term-time travel, freshers' week, move-in day runs, nights out and airport runs. Reliable and always on time.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Late Night & Early Morning Taxi',
    desc: "Out late on the town? Early morning flight from Edinburgh or Glasgow? We never sleep — a driver is always ready in St Andrews whatever the hour, 365 days a year.",
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <RevealWrapper>
          <div className="section-eyebrow"><span>What we offer</span></div>
          <h2 id="services-heading" className="section-title">
            Our <span className="gold">Services</span>
          </h2>
          <p className="section-sub">
            From quick local journeys in St Andrews to long-distance airport transfers across
            Scotland — covered with professionalism and punctuality.
          </p>
        </RevealWrapper>

        <div className="services-grid">
          {services.map((s) => (
            <RevealWrapper key={s.title}>
              <article className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
