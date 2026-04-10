import RevealWrapper from './RevealWrapper';

const reviews = [
  {
    initials: 'MT',
    name: 'Margaret T.',
    sub: 'St Andrews resident',
    text: 'Absolutely brilliant service. I needed an early morning taxi to Edinburgh Airport and the driver was there 5 minutes early. Friendly, professional and a fair price. Will use every time.',
  },
  {
    initials: 'JK',
    name: 'James K.',
    sub: 'Visiting golfer, USA',
    text: 'Came to St Andrews for the golf. The driver picked us up from the hotel, took us to the Old Course and collected us after. Couldn\'t be easier. Highly recommended to any visiting golfers.',
  },
  {
    initials: 'CM',
    name: 'Claire M.',
    sub: 'Wedding client',
    text: 'Used for my sister\'s wedding transport. Immaculate car, driver was smartly dressed and on time. Everyone commented on how smooth the whole thing was. Thank you!',
  },
  {
    initials: 'RB',
    name: 'Rory B.',
    sub: 'University of St Andrews student',
    text: 'As a student at St Andrews University, I rely on this service regularly. Always punctual, always friendly. Saved me many times after late nights!',
  },
];

const Stars = () => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="testimonials-section" aria-labelledby="reviews-heading">
      <div className="container">
        <RevealWrapper>
          <div className="section-eyebrow"><span>Customer stories</span></div>
          <h2 id="reviews-heading" className="section-title">
            What Our <span className="gold">Clients Say</span>
          </h2>
        </RevealWrapper>

        <div className="testimonials-grid">
          {reviews.map((r) => (
            <RevealWrapper key={r.name}>
              <article className="testimonial-card">
                <Stars />
                <p className="testimonial-text">{r.text}</p>
                <div className="testimonial-footer">
                  <div className="testimonial-avatar">{r.initials}</div>
                  <div className="testimonial-author">
                    {r.name}
                    <span>{r.sub}</span>
                  </div>
                </div>
                <div className="quote-bg">&ldquo;</div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
