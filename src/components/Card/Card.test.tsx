import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, vi } from 'vitest';
import Card from './Card';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import CardList from '../CardList/CardList';
import MainCard, { loader as LoaderMainCard } from '../MainCard/MainCard';
import mockCardData from '../../mocks/mockCardData';

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
