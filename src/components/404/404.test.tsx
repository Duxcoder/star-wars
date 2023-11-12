import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { test, expect } from 'vitest';
import NotFoundPage from './404';

test('renders 404 page on unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/page/is/not/founded']}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/:category/:cardsPerPage/:page" element="mock page" />,
      </Routes>
    </MemoryRouter>
  );

  const notFoundHeading = screen.getByRole('heading', { name: /404 Not Found/i });
  expect(notFoundHeading).toBeInTheDocument();
});

test('renders page with correct route', () => {
  render(
    <MemoryRouter initialEntries={['/people/10/1']}>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/:category/:cardsPerPage/:page" element="mock page" />,
      </Routes>
    </MemoryRouter>
  );

  const notFoundHeadingOnCorrectRoute = screen.queryByRole('heading', { name: /404 Not Found/i });
  expect(notFoundHeadingOnCorrectRoute).not.toBeInTheDocument();
});
