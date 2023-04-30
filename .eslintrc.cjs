module.exports = {
  root: true,
  ignorePatterns: ['dist/**/*'],
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'import/order': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      }
    ]
  },
  parserOptions: {
    project: './tsconfig.json'
  }
}
