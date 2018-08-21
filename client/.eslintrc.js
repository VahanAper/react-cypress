module.exports = {
  overrides: [
    {
      files: ['**/__tests__/**', '**/__mocks__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: require.resolve('./jest.config.js'),
          },
        },
      },
    },
  ],
  rules: {
    'max-lines-per-function': 'off',
    'import/no-cycle': 'off',
    'import/no-self-import': 'off',
    'import/no-useless-path-segments': 'off',
    'react/jsx-child-element-spacing': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-this-in-sfc': 'off',
    'react/no-unsafe': 'off',
  },
}
