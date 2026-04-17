import googleConfig from 'eslint-config-google';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...googleConfig.rules,
      // On force les 2 espaces (le cœur de la norme Google)
      'indent': ['error', 2],
      
      // On supprime les règles qui font planter ESLint v10
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
      
      // Petit fix pour TypeScript si nécessaire
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error']
    },
  },
];