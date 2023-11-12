import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Sword from './Sword';

test('renders Sword component', () => {
  render(<Sword />);

  const swordComponent = screen.getByTestId('loading-spinner');
  expect(swordComponent).toBeInTheDocument();
});
