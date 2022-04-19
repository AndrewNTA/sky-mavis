module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    quotes: [2, 'single'],
    curly: 2,
    semi: 2,
    indent: ['error', 2, {
      'ignoredNodes': ['TemplateLiteral']
    }],
    'template-curly-spacing': 'off',
  }
};
