const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  // path: path.resolve(__dirname, 'build'),
  //   filename: '[name].js',
  //   publicPath: '/',
  // assetModuleFilename: pathData => {
  //   const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
  //   return `${filepath}/[name].[hash][ext][query]`;
  // },
  
  module:{
    rules: [
      {
        test: /\.(css)$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options:{
          limit:20000,
          publicPath:'./dist/',
          name:'[name].[ext]?[hash]',
          esModule: false
        }
      },
    ]
  }
}
