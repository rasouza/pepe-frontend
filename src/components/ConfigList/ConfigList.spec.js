import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ConfigList from './ConfigList';

const mock = [
  ['key1', '1'],
  ['key2', 2],
  ['key2.subkey1', 'easter-egg'],
  ['key3', 'tres'],
  ['key3.subkey1', 4]
];

describe('ConfigList', () => {
  // @TODO
  test.skip('should render with default styles', () => {
    const actual = renderer.create(<ConfigList />);
    expect(actual).toMatchSnapshot();
  });

  // @TODO
  test.skip('should render with data', () => {
    const actual = render(<ConfigList configs={mock} />);
    expect(actual).toMatchSnapshot();

    const key1Node = actual.getByText('key1');
    expect(key1Node).not.toBeNull();
  });
});
