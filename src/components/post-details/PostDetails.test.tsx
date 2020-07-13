import React from 'react';
import {render, screen} from '@testing-library/react';

import {PostDetails} from './PostDetails';

describe('PostDetails', () => {
  test('renders PostDetails component', () => {
    render(<PostDetails id="5" />);
    expect(screen.getByText('Loading post details')).toBeInTheDocument();
  });
});
