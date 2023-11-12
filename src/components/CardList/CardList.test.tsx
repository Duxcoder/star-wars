import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import CardList from './CardList';
import cl from '../Card/Card.module.css';
const mockCard = {
  birth_year: 'test',
  eye_color: 'test',
  films: ['test'],
  gender: 'test',
  hair_color: 'test',
  height: 'test',
  homeworld: 'test',
  mass: 'test',
  name: 'test',
  skin_color: 'test',
  species: ['test'],
  starships: ['test'],
  vehicles: ['test'],
  created: 'test',
  edited: 'test',
  url: 'test',
};

describe('CardList Component', () => {
  it('renders cards correctly with one card', () => {
    const mockCards = [mockCard];

    const { container } = render(
      <MemoryRouter>
        <CardList cards={mockCards} />
      </MemoryRouter>
    );
    const cardElements = container.getElementsByClassName(cl.card);
    expect(cardElements.length).toBe(mockCards.length);
  });

  it('renders cards correctly with 30 card', () => {
    const mockCards = new Array(30).fill(mockCard);

    const { container } = render(
      <MemoryRouter>
        <CardList cards={mockCards} />
      </MemoryRouter>
    );
    const cardElements = container.getElementsByClassName(cl.card);
    expect(cardElements.length).toBe(mockCards.length);
  });

  it('renders not found message when no cards are present', () => {
    render(
      <MemoryRouter>
        <CardList cards={[]} />
      </MemoryRouter>
    );
    const notFoundElement = screen.getByText('No results found...');
    expect(notFoundElement).toBeInTheDocument();
  });
});
