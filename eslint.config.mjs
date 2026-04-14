import googleConfig from 'eslint-config-google';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      globals: {
        window: "readonly",
        document: "readonly"
      }
    },
    plugins: {
      // ____________
    },
    rules: {

      // _________
    }
  }
];