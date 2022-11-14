const OFF = 0, WARN = 1, ERROR = 2;

module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:promise/recommended',
    "plugin:prettier/recommended",
  ],
  plugins: ['jest', 'import', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': ERROR,
    'import/prefer-default-export': OFF,
    '@typescript-eslint/lines-between-class-members': OFF,
    'no-plusplus' : [
      ERROR,
      { allowForLoopAfterthoughts: true },
    ],
  },
  overrides: [
    {
      files: ['test/**/*.{ts,tsx}'],
      rules: {
        'import/first': OFF,
      },
    },
  ],
}
