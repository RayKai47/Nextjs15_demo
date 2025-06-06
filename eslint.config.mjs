import { dirname } from "path";
import { fileURLToPath } from "url";
import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import babel from 'eslint-plugin-babel';
import reduxSaga from 'eslint-plugin-redux-saga';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: 'babel-eslint',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        SockJS: true,
        Stomp: true
      }
    },
    plugins: {
      babel,
      react,
      'react-hooks': reactHooks,
      'redux-saga': reduxSaga
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'arrow-spacing': 2,
      'camelcase': 'off',
      'indent': [
        'error',
        2,
        {
          ignoreComments: true,
          MemberExpression: 1,
          SwitchCase: 1,
          VariableDeclarator: 'first'
        }
      ],
      'jsx-quotes': ['error', 'prefer-double'],
      'linebreak-style': 0,
      'no-console': 0,
      'no-unused-vars': [
        'error',
        {
          caughtErrors: 'all'
        }
      ],
      'no-invalid-this': 0,
      'babel/no-invalid-this': 0,
      'object-curly-spacing': ['error', 'always'],
      'require-jsdoc': 0,
      'space-infix-ops': 2,
      'valid-jsdoc': 0,
      'react/sort-comp': 2,
      'react-hooks/rules-of-hooks': 2,
      'max-len': [2, {
        code: 120,
        ignorePattern: '^import\\W.*'
      }]
    }
  }
];

export default eslintConfig;