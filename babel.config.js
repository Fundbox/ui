module.exports = {
  env: {
    production: {
      presets: [
        "@babel/preset-env"
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        [
          "@babel/plugin-proposal-object-rest-spread",
          {
            useBuiltIns: true
          }
        ],
        [
          "@babel/plugin-proposal-decorators",
          {
            legacy: true
          }
        ],
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions"
      ],
    },
    test: {
      presets: [
        "@babel/preset-env"
      ],
      plugins: [
        [
          "@babel/plugin-proposal-object-rest-spread",
          {
            useBuiltIns: true
          }
        ]
      ]
    }
  }
};
