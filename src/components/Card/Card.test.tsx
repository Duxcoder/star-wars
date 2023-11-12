import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import Card from './Card';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import CardList from '../CardList/CardList';
import MainCard, { loader as LoaderMainCard } from '../MainCard/MainCard';
import mockCardData from '../../mocks/mockCardData';
import getCard from './identifyCardCategory';

describe('Card Component', () => {
  it('displays card data correctly', () => {
    render(<Card data={mockCardData} onClick={() => {}} />);

    expect(screen.getByText('mass') && screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('name') && screen.getByText('testing')).toBeInTheDocument();
  });
});
describe('CardList Component when click on card', () => {
  const mockCards = [mockCardData];
  const spy = vi.spyOn(global, 'fetch');

  it('renders MainCard on card click with new request', async () => {
    const routes = [
      {
        path: '/:category/:cardsPerPage/:page',
        element: <CardList cards={mockCards} />,
      },
      {
        path: '/:category/:cardsPerPage/:page/details/:id',
        element: <MainCard />,
        loader: LoaderMainCard,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ['/people/10/1'] });
    render(<RouterProvider router={router} />);

    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);

    await waitFor(() => {
      const mainCardElement = screen.getByTestId('main-card');
      expect(mainCardElement).toBeInTheDocument();
      expect(spy).toHaveBeenCalledWith('https://swapi.py4e.com/api/people/2');
    });
  });
});

it('getCard returns correct fields for People category', () => {
  const result = getCard(mockCardData);
  expect(result).toEqual({
    name: 'testing',
    gender: 'test',
    height: 'test',
    hair_color: 'test',
    mass: '20',
  });
});

it('fieldsForCategory returns correct fields for Vehicles category', () => {
  const mockVehiclesData = {
    cargo_capacity: 'test2',
    consumables: 'test2',
    cost_in_credits: 'test2',
    crew: 'test2',
    length: 'test2',
    manufacturer: 'test2',
    max_atmosphering_speed: 'test2',
    model: 'test2',
    name: 'test2',
    passengers: 'test2',
    pilots: ['test2'],
    films: ['test2'],
    vehicle_class: 'test2',
    created: 'tested2',
    edited: 'test2',
    url: 'https://swapi.py4e.com/api/vehicle/2/',
  };

  const result = getCard(mockVehiclesData);
  expect(result).toEqual({
    crew: 'test2',
    manufacturer: 'test2',
    model: 'test2',
    name: 'test2',
    passengers: 'test2',
  });
});

const mockSpeciesData = {
  average_height: 'test3',
  average_lifespan: 'test3',
  classification: 'test3',
  designation: 'test3',
  eye_colors: 'test3',
  hair_colors: 'test3',
  homeworld: 'test3',
  language: 'test3',
  name: 'test3',
  people: ['test3'],
  films: ['test3'],
  skin_colors: 'test3',
  created: 'tested3',
  edited: 'test3',
  url: 'https://swapi.py4e.com/api/species/2/',
};

it('fieldsForCategory returns correct fields for Species category', () => {
  const result = getCard(mockSpeciesData);
  expect(result).toEqual({
    classification: 'test3',
    designation: 'test3',
    language: 'test3',
    name: 'test3',
    skin_colors: 'test3',
  });
});
