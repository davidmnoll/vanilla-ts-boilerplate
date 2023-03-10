const path = require('path');
module.exports = {
  mode: "none",
  entry: [
    './src/index.tsx',
  ],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, 'dist')
  },
  resolve: {
    // Add .ts and .tsx as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }],
              ["@babel/preset-typescript"],
              ['@babel/preset-react']
            ],
            plugins: [
              ["@babel/plugin-transform-react-jsx"],
              ["@babel/plugin-syntax-jsx"],
              ["@babel/plugin-transform-modules-commonjs"]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'
          // {
          //   loader: "style-loader"
          // },
          // {
          //   loader: "css-loader",
          //   options: {
          //       modules: true,
          //       importLoaders: 1,
          //       sourceMap: true,              
          //   }
          // },
          // {
          //   loader: 'postcss-loader'
          // }
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "script-loader",
         options: {
          sourceMap: true
         }
      },
    ]
  }
}
