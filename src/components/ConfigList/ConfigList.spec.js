import React from 'react';

import ConfigList from './ConfigList';

const mock = [
  ['key1', '1'],
  ['key2', '2'],
  ['key2.subkey1', 'easter-egg'],
  ['key3', 'tres'],
  ['key3.subkey1', '4']
];

describe('ConfigList', () => {
  it('should render with default styles', () => {
    const actual = render(<ConfigList />);
    expect(actual).toMatchSnapshot();
  });

  // @TODO
  it('should render with data', () => {
    const actual = render(<ConfigList configs={mock} />);
    expect(actual).toMatchSnapshot();

    const key1Node = actual.getAllByText('key1');
    expect(key1Node).not.toBeNull();
  });
});
