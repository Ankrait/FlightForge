import pluginJs from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsx from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import { configs as tsConfigs } from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    languageOptions: {
      parser: '@typescript-eslint/parser',
      globals: { ...globals.browser, ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  ...tsConfigs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
  jsx.flatConfigs.recommended,
  importPlugin.flatConfigs.recommended,

  {
    plugins: {
      'react-hooks': hooks,
      '@typescript-eslint/eslint-plugin': tsPlugin,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'import/named': 'off',
      'import/no-unresolved': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'jsx-a11y/no-autofocus': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'index',
            'type',
            'object',
            'unknown',
            'parent',
            'sibling',
          ],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '{.,..,**}/*.scss',
              group: 'sibling',
              position: 'after',
            },
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          project: '.',
          extensions: ['.tsx', '.ts'],
        },
      },
    },
  },
];
