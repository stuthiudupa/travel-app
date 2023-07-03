module.exports = {
    // ... other webpack config
  resolve : {
    fallback: {
          // Use can only include required modules. Also install the package.
          // for example: npm install --save-dev assert
          url: require.resolve('url'),
          fs: false,  
          path: false, 
          os: false, 
          net: false, 
          tls: false,
          assert: require.resolve('assert'),
          crypto: require.resolve('crypto-browserify'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          buffer: require.resolve('buffer'),
          stream: require.resolve('stream-browserify'),
          async_hooks: false,
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
      })
    ]
  }
  