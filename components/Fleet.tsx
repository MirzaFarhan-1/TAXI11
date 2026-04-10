import RevealWrapper from './RevealWrapper';

const fleet = [
  {
    img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80',
    tag: 'Standard',
    name: 'Saloon / Estate',
    desc: 'Comfortable standard saloon or estate — ideal for 1–4 passengers with standard luggage.',
    features: ['Up to 4 passengers', 'Air conditioning', 'Card payments'],
  },
  {
    img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
    tag: 'Premium',
    name: 'Executive MPV',
    desc: 'Spacious and stylish — perfect for groups or those who want extra comfort on longer journeys.',
    features: ['Up to 6 passengers', 'Extra legroom', 'Large boot'],
  },
  {
    img: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80',
    tag: 'Group',
    name: 'Minibus',
    desc: 'Travelling in a larger group? Our minibus is ideal for golf groups, corporate outings and airport runs.',
    features: ['Up to 8 passengers', 'Luggage space', 'Group bookings'],
  },
];

export default function Fleet() {
  return (
    <section className="fleet-section" id="fleet" aria-labelledby="fleet-heading">
      <div className="container">
        <RevealWrapper>
          <div className="section-eyebrow"><span>Travel in comfort</span></div>
          <h2 id="fleet-heading" className="section-title">
            Our <span className="gold">Fleet</span>
          </h2>
          <p className="section-sub">Clean, modern and comfortable vehicles for every journey.</p>
        </RevealWrapper>

        <div className="fleet-grid">
          {fleet.map((v) => (
            <RevealWrapper key={v.name}>
              <div className="fleet-card">
                <div
                  className="fleet-img"
                  style={{ backgroundImage: `url('${v.img}')` }}
                  role="img"
                  aria-label={`${v.name} taxi vehicle`}
                >
                  <span className="fleet-img-tag">{v.tag}</span>
                </div>
                <div className="fleet-body">
                  <h3>{v.name}</h3>
                  <p>{v.desc}</p>
                  <div className="fleet-features">
                    {v.features.map((f) => (
                      <span key={f} className="fleet-tag">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
