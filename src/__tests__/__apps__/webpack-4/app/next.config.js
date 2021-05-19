const withTM = require('./next-transpile-modules')(['shared', 'shared-ts', 'shared-ui', 'lodash-es'], { debug: false });

module.exports = withTM({
  future: {
    webpack5: false,
  },
});
