import React from 'react';
import {render, screen} from '@testing-library/react';

import {Tile} from './Tile';

describe('Tile', () => {
  test('renders Tile component', () => {
    render(<Tile userId={5} title="Example title" id={1} />);
    expect(screen.getByText(/Example title/)).toBeInTheDocument();
    expect(screen.getByText(/5/)).toBeInTheDocument();
  });
});
