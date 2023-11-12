import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { test, expect } from 'vitest';
import MainCard, { loader as LoaderMainCard } from './MainCard';

test('renders detailed card data when loaded', async () => {
  const routes = [
    {
      path: '/:category/:cardsPerPage/:page/details/:id',
      element: <MainCard />,
      loader: LoaderMainCard,
    },
  ];
  const router = createMemoryRouter(routes, { initialEntries: ['/people/10/1/details/2'] });
  render(<RouterProvider router={router} />);

  await screen.findByTestId('main-card');

  const mainCard = screen.getByTestId('main-card');
  expect(mainCard).toBeInTheDocument();
  expect(screen.getByText('tested')).toBeInTheDocument();
  expect(screen.getByText('testing')).toBeInTheDocument();
});

test('hides MainCard component on close button click', async () => {
  const routes = [
    {
      path: '/:category/:cardsPerPage/:page/details/:id',
      element: <MainCard />,
      loader: LoaderMainCard,
    },
  ];
  const router = createMemoryRouter(routes, { initialEntries: ['/people/10/1/details/2'] });
  render(<RouterProvider router={router} />);

  await screen.findByTestId('main-card');

  fireEvent.click(screen.getByTestId('close-button'));

  expect(screen.queryByTestId('main-card')).not.toBeInTheDocument();
});
