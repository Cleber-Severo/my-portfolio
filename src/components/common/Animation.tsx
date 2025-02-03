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
              value: 'transparent',
            },
          },
          particles: {
            color: {
              value: '#FFF',
            },
            links: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
            },
            number: {
              density: {
                enable: true,
              },
              value: 120,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: 'circle',
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
