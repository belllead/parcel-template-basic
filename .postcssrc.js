// // ESM, EcmaScript Module => CommonJS

// // import => require()
// // import autoprefixer from 'autoprefixer' => 
// const autoprefixer = require('autoprefixer')

// // export => module.exports
// // export {
// //   plugins: [
// //     autoprefixer
// //   ]
// // } =>
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}