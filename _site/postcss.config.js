// module.exports = {
//   plugins: [
//     require('@tailwindcss/postcss'), // Correct Tailwind CSS PostCSS plugin
//     require('autoprefixer'), // Adds vendor prefixes
//     require('cssnano')({ preset: 'default' }) // Minifies CSS
//   ]
// }
// module.exports = {
//   plugins: {
//       tailwindcss: {},
//       autoprefixer: {},
//       cssnano: { preset: 'default' } // Minify CSS
//   }
// };
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}