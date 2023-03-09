const path = require('path');
module.exports = {
  mode: "none",
  entry: [
    './src/index.js',
    './src/index.css'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
         }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
                modules: true,
                importLoaders: 1,
                sourceMap: true                    
            }
          }
        ]
      }
    ]
  }
}
