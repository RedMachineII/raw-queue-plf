// vue.config.js

// module.exports = {
//   devServer: {
//     proxy: '10.4.159.15',
//   },
//   publicPath: process.env.NODE_ENV === 'production' ? '/sequencing' : '/',
// }
// module.exports = {
//   devServer: {
//     proxy: 'https://www.cpfsmartfarmsolution.com',
//   },
//   publicPath: process.env.NODE_ENV === 'production' ? '/sequencing' : '/',
// }
module.exports = {
  devServer: {
    proxy: 'http://localhost',
    // port: 3579
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/raw-queue' : '/',
}