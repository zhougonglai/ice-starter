const path = require('path');
// const workboxPlugin = require('workbox-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = ({webpack}) => {
  return {
    output:{
      path: path.resolve('dist')
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@api': path.resolve(__dirname, 'src/api/'),
        '@store': path.resolve(__dirname, 'src/store/'),
        '@utils': path.resolve(__dirname, 'src/utils/')
      }
    },
    plugins: []
  }
}
