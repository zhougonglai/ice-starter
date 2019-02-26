const path = require('path');
// const workboxPlugin = require('workbox-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = ({webpack}) => {
  return {
    output:{
      path: path.resolve('dist')
    },
    plugins: [
      new webpack.DllPlugin({ name: '[name]', path: path.join(__dirname, 'build/[name].json') }),
      // new ManifestPlugin(),
      // new workboxPlugin.GenerateSW({
      //   swDest: 'sw.js',
      //   clientsClaim: true,
      //   skipWaiting: true,
      // })
    ]
  }
}
