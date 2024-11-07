import eslintPluginReact from "eslint-plugin-react";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      // Add your custom rules here
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];