module.exports = {
  devServer: {
    proxy: 'http://localhost',
    // port: 8801
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/raw-queue' : '/',
}