import React from 'react';
import Login from './Login';

const t = () => '[[ translated.content ]]';

describe('Login', () => {
  describe('styles', () => {
    it('should render with translated text', () => {
      const { queryByText } = render(<Login t={t} />);

      expect(queryByText(t())).toBeInTheDocument();
    });
  });
});
