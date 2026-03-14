import { useEffect, useRef } from 'react';

export default function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.querySelectorAll('.fade-in')) {
            entry.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
          }
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      const revealElements = containerRef.current.querySelectorAll('.fade-in, .section-header, .glass-card');
      revealElements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
