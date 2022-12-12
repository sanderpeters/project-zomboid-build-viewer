module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-prettier'],
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        semi: false,
        singleQuote: true,
        useTabs: false,
        jsxSingleQuote: false,
        bracketSpacing: true,
        arrowParens: 'always',
        quoteProps: 'consistent',
        proseWrap: 'always',
      },
    ],
  },
}
