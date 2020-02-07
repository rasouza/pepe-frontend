import React from 'react';

import Navigation from './Navigation';

// !TODO: write your tests.

describe.skip('Navigation', () => {
  function renderNavigation(fn, props = {}) {
    return fn(<Navigation {...props} />);
  }

  describe('styles', () => {
    it('should render with default styles', () => {
      const actual = renderNavigation(create);
      expect(actual).toMatchSnapshot();
    });
  });

  describe('business logic', () => {
    it('should have tests');
  });

  describe('accessibility', () => {
    it('should meet accessibility guidelines', async () => {
      const wrapper = renderNavigation(renderToHtml);
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });
});
