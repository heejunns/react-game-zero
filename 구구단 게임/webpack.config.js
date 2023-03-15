const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval', // 개발 때는 eval, production 일때는 hidden-source-map 사용
  resolve: {
    // 확장자 생략
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
