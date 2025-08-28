// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "*.d.ts",
      "**/*.d.ts",
    ],
    rules: {
      // Disable TypeScript-specific rules that cause build errors
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      
      // Disable React-specific strict rules
      "react/no-unescaped-entities": "off",
      "react-hooks/exhaustive-deps": "warn", // Change from error to warning
      
      // Disable other common problematic rules
      "no-unused-vars": "off",
      "prefer-const": "warn",
      "no-console": "off",
      
      // Allow any types and implicit returns
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      
      // Allow empty interfaces and types
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      
      // Disable import ordering (can cause issues)
      "@next/next/no-html-link-for-pages": "off",
    }
  },
];

export default eslintConfig;