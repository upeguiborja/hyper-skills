/* eslint-env node */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
  ],
  overrides: [{ files: ['*.ts', '*.tsx'], rules: { 'no-undef': 'off' } }],
}
