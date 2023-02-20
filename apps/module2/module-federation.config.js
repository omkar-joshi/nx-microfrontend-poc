module.exports = {
  name: 'module2',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
