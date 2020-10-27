module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "prettier"],
  "env": {
    browser: true,
    es6: true,
  },
  "rules": {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0

  }
}