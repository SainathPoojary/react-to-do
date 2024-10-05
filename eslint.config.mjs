import globals from 'globals';
import js from '@eslint/js';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJSX from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';

const reactRules = {
  ...eslintPluginReact.configs.recommended.rules,
  'react/react-in-jsx-scope': 'off',
  'react/jsx-uses-react': 'off',
};

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJSX,
      import: importPlugin,
    },
    rules: {
      // ESLint core rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      'no-var': 'error',

      // React rules (using our modified version)
      ...reactRules,
      'react/boolean-prop-naming': 'warn',
      'react/button-has-type': 'warn',
      'react/default-props-match-prop-types': 'warn',
      'react/destructuring-assignment': 'warn',
      'react/jsx-fragments': ['warn', 'syntax'],
      'react/jsx-no-leaked-render': 'warn',
      'react/prop-types': 'warn',
      'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
      'react/jsx-props-no-spreading': 'warn',
      'react/no-unused-prop-types': 'warn',

      // React Hooks rules
      ...eslintPluginReactHooks.configs.recommended.rules,

      // Import rules
      ...importPlugin.configs.recommended.rules,
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'warn',

      // JSX Accessibility rules
      ...eslintPluginJSX.configs.recommended.rules,
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx'],
          paths: ['src'],
        },
      },
    },
  },
  prettierConfig,
];
