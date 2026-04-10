'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 10000, suffix: '+', label: 'Happy Passengers' },
  { target: 15, suffix: '', label: 'Years in Business' },
  { target: 24, suffix: '', label: 'Hours Available' },
  { target: 100, suffix: '%', label: '5-Star Reviews' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const step = target / 60;
          let c = 0;
          const tmr = setInterval(() => {
            c += step;
            if (c >= target) { c = target; clearInterval(tmr); }
            setCount(Math.floor(c));
          }, 26);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-num">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <div className="stats-banner">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={s.label} className={i < stats.length - 1 ? 'stat-divider' : ''}>
              <Counter target={s.target} suffix={s.suffix} />
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
