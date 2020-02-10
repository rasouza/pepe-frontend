import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@sumup/circuit-ui';

/**
 * Describe ConfigList here.
 */
const ConfigList = ({ configs, onClickConfig }) => (
  <Table
    headers={['Key', 'Value']}
    rows={configs}
    onRowClick={index => onClickConfig(configs[index])}
  />
);

ConfigList.propTypes = {
  configs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string.isRequired)),
  onClickConfig: PropTypes.func
};

ConfigList.defaultProps = {
  configs: [],
  onClickConfig: () => {}
};

/**
 * @component
 */
export default ConfigList;
