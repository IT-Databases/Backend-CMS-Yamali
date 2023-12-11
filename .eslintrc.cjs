module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['prettier', 'react'],
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:@react/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'max-len': ['error', 120],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'react/prop-types': 'off',
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
