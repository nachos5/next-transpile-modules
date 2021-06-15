const withTM = require('./next-transpile-modules')(['shared', 'shared-ts', 'shared-ui', 'lodash-es'], { debug: true });

module.exports = withTM({
  webpack5: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
