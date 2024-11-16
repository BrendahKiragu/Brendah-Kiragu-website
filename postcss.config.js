module.exports = {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./index.html', './script.js'], 
    }),
  ],
};
