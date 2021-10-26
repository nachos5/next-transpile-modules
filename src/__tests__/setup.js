const fse = require('fs-extra');

// Setup local packages
fse.copySync('src/__tests__/__packages__', 'src/__tests__/__apps__');
fse.copySync('src/__tests__/__packages__', 'src/__tests__/__apps__/yarn-workspaces');
fse.copySync('src/__tests__/__packages__', 'src/__tests__/__apps__/yarn-workspaces-symlinks');
fse.copySync('src/__tests__/__packages__', 'src/__tests__/__apps__/swc');

// Setup pages for each test
fse.copySync('src/__tests__/__files__', 'src/__tests__/__apps__/npm-basic');
fse.copySync('src/__tests__/__files__', 'src/__tests__/__apps__/yarn-workspaces/app');
fse.copySync('src/__tests__/__files__', 'src/__tests__/__apps__/yarn-workspaces-symlinks/app');
fse.copySync('src/__tests__/__files__', 'src/__tests__/__apps__/pnpm');
fse.copySync('src/__tests__/__files__', 'src/__tests__/__apps__/swc/app');

// Setup pages for each test
fse.copySync('./src/next-transpile-modules.js', 'src/__tests__/__apps__/npm-basic/next-transpile-modules.js');
fse.copySync('./src/next-transpile-modules.js', 'src/__tests__/__apps__/yarn-workspaces/app/next-transpile-modules.js');
fse.copySync(
  './src/next-transpile-modules.js',
  'src/__tests__/__apps__/yarn-workspaces-symlinks/app/next-transpile-modules.js'
);
fse.copySync('./src/next-transpile-modules.js', 'src/__tests__/__apps__/pnpm/next-transpile-modules.js');
fse.copySync('./src/next-transpile-modules.js', 'src/__tests__/__apps__/swc/app/next-transpile-modules.js');
