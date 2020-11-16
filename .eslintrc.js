module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],

  plugins: ['prettier'],

  parser: 'babel-eslint',
  globals: {
    window: true,
    document: true,
  },
  // rules
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'eol-last': ['off'],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'react/sort-comp': ['off'],
    'no-nested-ternary': ['off'],
    'react/no-unused-state': ['warn'],
    'react/forbid-prop-types': ['off'],
    'react/no-array-index-key': ['off'],

    // jsx-a11y rules
    'jsx-a11y/anchor-is-valid': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/no-noninteractive-element-interactions': ['off'],
    'jsx-a11y/no-static-element-interactions': ['off'],

    // prettier
    'prettier/prettier': 'error',
  },
  env: {
    jest: true,
    browser: true,
  },
}
