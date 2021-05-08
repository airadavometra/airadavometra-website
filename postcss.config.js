module.exports = () => {
  return {
    parser: 'postcss-scss',
    plugins: [
      require('postcss-preset-env')(),
      require('postcss-nested')(),
      require('postcss-sort-media-queries')(),
      require('autoprefixer')(),
    ],
  };
};
