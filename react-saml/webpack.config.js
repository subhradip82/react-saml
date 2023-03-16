const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      
    ],
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    extensions: ['*', '.js', '.jsx'],
    
    fallback: {
    
      crypto: require.resolve('crypto-browserify'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      timers: require.resolve('timers-browserify') ,
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),  
      zlib : require.resolve("browserify-zlib") ,
      querystring : require.resolve("querystring-es3"),
      util: require.resolve("util/"),
      url: require.resolve("url/") ,
      buffer: require.resolve("buffer/"),
      assert: require.resolve("assert/"),
      fs: false,
       
       

  },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    filename: './index.html',
    favicon: './public/favicon.ico'
    })
  ],
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, './dist'),
    hot: true,
  },
};