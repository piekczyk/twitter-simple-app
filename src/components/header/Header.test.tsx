import React from 'react';
import {render, screen} from '@testing-library/react';

import {Header} from './Header';

describe('Header', () => {
  test('renders Header component', () => {
    render(<Header handleFilter={() => null} />);
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
  test('renders Header component with postId', () => {
    render(<Header handleFilter={() => null} postId="5" />);
    expect(screen.getByText('Go back')).toBeInTheDocument();
  });
});
