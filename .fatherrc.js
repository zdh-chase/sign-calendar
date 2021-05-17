export default {
  entry: 'src/index.js',
  lessInBabelMode: true,
  extractCSS: true,
  cjs: {
    minify: true,
    type: 'babel',
  }
};
