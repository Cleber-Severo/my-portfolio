import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const Animation = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: 'transparent', // Fallback background color
            },
          },
          particles: {
            color: {
              value: '#FFF',
            },
            links: {
              enable: false, // Disable lines
            },
            move: {
              enable: true,
              speed: 0.5, // Slow down particles
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
            },
            number: {
              density: {
                enable: true,
              },
              value: 80, // Adjust number of particles as needed
            },
            opacity: {
              value: 0.8, // Adjust opacity
            },
            shape: {
              type: 'circle', // Only dots (circles)
            },
            size: {
              value: { min: 1, max: 1 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};
