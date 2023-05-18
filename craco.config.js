const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@dist': path.resolve(__dirname, 'src/dist'),
      '@package': path.resolve(__dirname, 'src/package'),
      '~': path.resolve(__dirname, 'src/package'),
    },
  },
};
