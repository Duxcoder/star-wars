import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { test, expect } from 'vitest';
import Pagination from './Pagination';
import cl from '../UI/BaseButton/BaseButton.module.css';

test('updates URL parameter when changing pages', async () => {
  const routes = [
    {
      path: '/:category/:cardsPerPage/:page/details/:id',
      element: <Pagination pages={10} />,
    },
  ];
  const router = createMemoryRouter(routes, { initialEntries: ['/people/10/1/details/2'] });
  render(<RouterProvider router={router} />);

  expect(screen.getByTestId('pagination')).toBeInTheDocument();
  expect(screen.getByText('1')).toHaveClass(cl.active);
});
