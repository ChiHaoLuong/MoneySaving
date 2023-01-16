module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/Components',
          '@screens': './src/screens',
          '@theme': './src/Theme',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@navigations': './src/Navigations',
        },
      },
    ],
  ],
};
