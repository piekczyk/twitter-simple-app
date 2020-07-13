import React from 'react';
import {render} from '@testing-library/react';

import {Wall} from './Wall';

describe('Wall', () => {
  test('renders Wall component', () => {
    render(<Wall />);
  });
});
