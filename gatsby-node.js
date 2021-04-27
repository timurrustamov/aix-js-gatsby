require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  extensions: ['.jsx', '.js', '.mjs', '.ts'],
});

exports.createPages = require('./gatsby/create-pages.ts').default;
exports.sourceNodes = require('./gatsby/source-nodes.ts').default;
exports.createResolvers = require('./gatsby/create-resolvers.ts').default;
