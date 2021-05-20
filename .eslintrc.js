module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['jest', 'react', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',

    // Style
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // ensures clean diffs, see https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8
    'comma-dangle': ['error', 'always-multiline'],

    // Require all imported dependencies are actually declared in package.json
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false, // Disallow importing optional dependencies (those shouldn't be in use in the project)
        peerDependencies: false, // Disallow importing peer dependencies (that aren't also direct dependencies)
      },
    ],

    // Require all imported libraries actually resolve (!!required for import/no-extraneous-dependencies to work!!)
    'import/no-unresolved': ['error'],

    // Require an ordering on all imports
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      ],
  
      // Don't leave log statements littering the premises!
      'no-console': ['warn'],
  
      // Useless diff results
      'no-trailing-spaces': ['error'],
  
      // Must use foo.bar instead of foo['bar'] if possible
      'dot-notation': ['error'],
  
      // Are you sure | is not a typo for || ?
      'no-bitwise': ['warn'],
    },
  };