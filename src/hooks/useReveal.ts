import { useEffect } from 'react';

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.05,
};

export function useReveal(
  selector = '.reveal',
  className = 'in',
  options: IntersectionObserverInit = DEFAULT_OPTIONS,
): void {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(selector);
    if (nodes.length === 0) return;

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          io.unobserve(entry.target);
        }
      }
    }, options);

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, [selector, className, options]);
}
