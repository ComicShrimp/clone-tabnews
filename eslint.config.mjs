import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: [".next/**"] },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.test.{js,jsx}"],
    plugins: { jest },
    languageOptions: { globals: globals.jest },
  },
  pluginReact.configs.flat.recommended,
  pluginPrettier,
]);
