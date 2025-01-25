const pluginJs = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-config-prettier');
const importPlugin = require('eslint-plugin-import');
const jsx = require('eslint-plugin-jsx-a11y');
const pluginReact = require('eslint-plugin-react');
const hooks = require('eslint-plugin-react-hooks');
const globals = require('globals');
const tsConfigs = require('typescript-eslint').configs;

module.exports = [
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
      'jsx-a11y/no-autofocus': 'off',
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      '@typescript-eslint/no-empty-object-type': 'off',
      'react/display-name': 'off',
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
