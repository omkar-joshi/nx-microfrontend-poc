const baseConfig = require('../../module-federation-base.config');

module.exports = {
  ...baseConfig,
  name: 'module3',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
