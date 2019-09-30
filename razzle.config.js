const modifyBuilder = require('razzle-plugin-postcss').default;
const cssConfig = {
  postcssPlugins: [
    require('postcss-import')(require('postcss-normalize')().postcssImport()),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
  ],
};
const modify = modifyBuilder({ cssConfig });

module.exports = {
  plugins: [{ func: modify }],
};
