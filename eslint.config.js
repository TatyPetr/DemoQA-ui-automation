const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'prefer-const': 'error'
    }
  },
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
      'package-lock.json'
    ]
  }
];
