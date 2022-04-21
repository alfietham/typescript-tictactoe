module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  mode: 'development',
}
