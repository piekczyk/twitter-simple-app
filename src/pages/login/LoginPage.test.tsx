import React from 'react';
import {render, screen} from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  test('renders LoginPage component', () => {
    render(<LoginPage />);
    expect(screen.getByText('Login form')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
