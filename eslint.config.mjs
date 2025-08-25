import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.extends('prettier'),
  ...compat.extends('plugin:styled-components-a11y/recommended'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'eslint.config.mjs',
    ],
  },
  {
    rules: {
      // Enforce design system component usage
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@emotion/*', 'emotion-*'],
              message: 'Use styled-components instead of emotion for consistency.',
            },
          ],
        },
      ],

      // Code quality rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'no-alert': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'off', // Handled by TypeScript
      'no-undef': 'off', // Handled by TypeScript

      // React specific rules
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-react': 'off', // Not needed in React 17+
      'react/jsx-uses-vars': 'error',
      'react/no-deprecated': 'error',
      'react/no-unknown-property': 'error',

      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // Import/export rules
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Styled-components accessibility rules are handled by the plugin extension above

      // General code style
      'prefer-template': 'error',
      'object-shorthand': 'error',
      'no-duplicate-imports': 'error',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      'eol-last': 'error',

      // Design system enforcement
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'JSXElement[openingElement.name.name=/^(h1|h2|h3|h4|h5|h6|p|span|div)$/] JSXText[value=/./]',
          message:
            "Use Typography components instead of raw HTML text elements. Import from '../components'.",
        },
        {
          selector: "JSXElement[openingElement.name.name='button']",
          message: "Use the Button component from '../components' instead of HTML button element.",
        },
      ],
    },
  },
];

export default eslintConfig;
