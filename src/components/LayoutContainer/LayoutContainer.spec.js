import React from 'react';

import LayoutContainer from './LayoutContainer';

// !TODO: write your tests.

describe.skip('LayoutContainer', () => {
  function renderLayoutContainer(fn, props = {}) {
    return fn(<LayoutContainer {...props} />);
  }

  describe('styles', () => {
    it('should render with default styles', () => {
      const actual = renderLayoutContainer(create);
      expect(actual).toMatchSnapshot();
    });
  });

  describe('business logic', () => {
    it('should have tests');
  });

  describe('accessibility', () => {
    it('should meet accessibility guidelines', async () => {
      const wrapper = renderLayoutContainer(renderToHtml);
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });
});
