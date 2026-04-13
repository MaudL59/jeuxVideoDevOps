import googleConfig from 'eslint-config-google';

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
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