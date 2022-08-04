/**
 * Custom config base for projects using jest.
 * @see https://github.com/belgattitude/nextjs-monorepo-example/tree/main/packages/eslint-config-bases
 */

const jestPatterns = {
  files: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
};

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  settings: {
    // To prevent autodetection issues in monorepos or via vitest
    jest: {
      version: 'latest',
    },
  },
  overrides: [
    {
      // Perf: To ensure best performance enable eslint-plugin-jest for test files only.
      files: jestPatterns.files,
      // @see https://github.com/jest-community/eslint-plugin-jest
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/no-focused-tests': 'error',
        'jest/prefer-mock-promise-shorthand': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/prefer-hooks-in-order': 'error',
        'jest/prefer-hooks-on-top': 'error',
        'jest/no-conditional-in-test': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-strict-equal': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/consistent-test-it': ['error', { fn: 'it' }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
