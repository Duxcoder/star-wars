import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import Card from './Card';
import mockCardData from '../../mocks/mockCardData';

describe('Card Component', () => {
  it('displays card data correctly', () => {
    render(<Card data={mockCardData} onClick={() => {}} />);

    expect(screen.getByText('name') && screen.getByText('testing')).toBeInTheDocument();
  });
});
