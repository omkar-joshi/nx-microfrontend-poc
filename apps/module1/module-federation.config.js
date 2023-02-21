const baseConfig = require('../../module-federation-base.config');

module.exports = {
  ...baseConfig,
  name: 'module1',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
