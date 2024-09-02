// import cypressPlugin from "eslint-plugin-cypress";
import globals from 'globals';
import eslintRecommended from '@eslint/js';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
    },

    plugins: {},
    ...eslintRecommended.configs.recommended,

    rules: {
      'no-unused-vars': 'error',
    },
  },
  {
    files: ['**/*.cy.js'],
    languageOptions: {
      globals: {
        ...globals.cypress,
      },
    },
    plugins: {
      // cypress: cypressPlugin,
    },
    rules: {
      'cypress/no-unnecessary-waiting': 'off',
      'no-unused-vars': 'off',
    },
  },
];
