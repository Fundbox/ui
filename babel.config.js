const presets = [
  [
    '@babel/env',
    { targets: 'last 2 versions and not dead' },
  ],
]

const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      absoluteRuntime: false,
      corejs: 3,
      helpers: true,
      regenerator: true,
      useESModules: true,
    },
  ],
  [
    '@babel/plugin-proposal-object-rest-spread',
    {
      useBuiltIns: true
    }
  ],
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ],
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions'
]

const env = {
  test: {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      [
        '@babel/plugin-proposal-object-rest-spread',
        {
          useBuiltIns: true
        }
      ]
    ]
  }
}


module.exports = { plugins, presets, env }
