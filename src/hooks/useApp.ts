import { useEffect, useRef } from "react";

export const useApp = () => {
    const containerRef = useRef<HTMLDivElement | null>(null); // Reference to the scrollable container

    useEffect(() => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              navLinks.forEach((link) => {
                link.classList.toggle(
                  'active',
                  link.getAttribute('href') === `#${entry.target.id}`
                );
              });
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach((section) => observer.observe(section));

      return () => observer.disconnect();
    }, []);

    return {
      containerRef
    }
}