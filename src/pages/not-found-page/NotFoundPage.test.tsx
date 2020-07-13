import React from 'react';
import {render, screen} from '@testing-library/react';

import {NotFoundPage} from './NotFoundPage';

describe('NotFoundPage', () => {
  test('renders NotFoundPage component', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('Page not found, redirecting soon')).toBeInTheDocument();
  });
});
