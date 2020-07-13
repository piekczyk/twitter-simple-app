import React from 'react';
import {render, screen} from '@testing-library/react';

import {Modal} from './Modal';

describe('Modal', () => {
  test('renders Modal component', () => {
    render(<Modal message="Modal message" />);
    expect(screen.getByText('Modal message')).toBeInTheDocument();
  });
});
