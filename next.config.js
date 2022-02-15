
/* IMPORT */

const TsconfigPathsPlugin = require ( 'tsconfig-paths-webpack-plugin' );

/* CONFIG */

const config = {
  webpack ( config ) {
    if ( !config.resolve.plugins ) config.resolve.plugins = [];
    config.resolve.plugins.push ( new TsconfigPathsPlugin () );
    return config;
  },
  experimental: {
    publicDirectory: true
  }
};

/* EXPORT */

module.exports = config;
