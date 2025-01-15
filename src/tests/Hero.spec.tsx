
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero';

describe('Hero section tests', () => {
  it('Should render the hero section', () => {
    render( <Hero /> )
    expect(screen.getByText('Cléber Severo')).toBeInTheDocument();
  });
});
