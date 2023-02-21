const baseConfig = require('../../module-federation-base.config');

module.exports = {
  ...baseConfig,
  name: 'container',
  remotes: ['module1', 'module2', 'module3'],
};
