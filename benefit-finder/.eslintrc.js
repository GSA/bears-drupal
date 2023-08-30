module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'standard',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    eqeqeq: [2, 'smart'],
    'no-console': 'warn',
    camelcase: 'off',
    'no-eval': 'error',
    'import/first': 'error',
  },
}
