const path = require('path');
// const workboxPlugin = require('workbox-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = ({webpack}) => {
  return {
    plugins: [
      // new webpack.DllPlugin({ name: '[name]', path: path.join(__dirname, 'public/[name].json') }),
      // new ManifestPlugin(),
      // new workboxPlugin.GenerateSW({
      //   swDest: 'sw.js',
      //   clientsClaim: true,
      //   skipWaiting: true,
      // })
    ]
  }
}
