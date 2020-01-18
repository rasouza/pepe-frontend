import React from 'react';
import Home from './Home';
import { render } from '@testing-library/react';

describe('Home', () => {
  it('says Hello', () => {
    const { queryByText } = render(<Home />);

    expect(queryByText('Hello')).toBeInTheDocument();
  });
});
