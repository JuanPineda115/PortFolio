module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'jest',
    ],
    rules: {
      semi: ['error', 'never'
        ],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': 'off',
      'no-restricted-syntax': ['error', 'FunctionExpression', 'WithStatement',
            "BinaryExpression[operator='in']"
        ],
      'import/no-cycle': ['error',
            { maxDepth: '∞'
            }
        ],
      'import/no-extraneous-dependencies': ['error',
            { devDependencies: false, optionalDependencies: false, peerDependencies: false
            }
        ],
    },
    globals: {
      React: 'readonly',
      ReactDOM: 'readonly',
      document: 'readonly',
    },
}