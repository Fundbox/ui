// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  globals: {
    module: true,
    require: true,
    exports: true,
    process: true,
    __dirname: true,
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "array-bracket-spacing": [1, "never"],
    "arrow-spacing": [1],
    "block-spacing": [1, "always"],
    camelcase: [1, {
      properties: "never",
    }],
    "comma-style": [1, "last"],
    "comma-dangle": [1, "always-multiline"],
    "computed-property-spacing": [1, "never"],
    "constructor-super": [2],
    curly: [2, "multi-line"],
    "func-style": [2, "declaration", {
      allowArrowFunctions: true,
    }],
    "eol-last": [1, "always"],
    "generator-star-spacing": [1, {
      before: true,
      after: false,
    }],
    eqeqeq: [2, "allow-null"],
    indent: [1, 2, {
      SwitchCase: 2,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 2,
      },
    }],
    "linebreak-style": [2, "unix"],
    "keyword-spacing": [1, {
      before: true,
      after: true,
      overrides: {
        catch: {
          after: false,
        },
      },
    }],
    "max-statements-per-line": [1, {
      max: 1,
    }],
    "new-cap": [2, {
      newIsCap: true,
      properties: true,
      newIsCapExceptions: ["moment"],
    }],
    "new-parens": [2],
    "no-alert": [1],
    "no-array-constructor": [2],
    "no-class-assign": [2],
    "no-cond-assign": [2, "except-parens"],
    "no-console": [1],
    "no-debugger": [1],
    "no-dupe-class-members": [2],
    "no-duplicate-imports": [2, {
      includeExports: true,
    }],
    "no-empty": [1, {
      allowEmptyCatch: true,
    }],
    "no-eval": [2],
    "no-inline-comments": [1],
    "no-label-var": [2],
    "no-lonely-if": [2],
    "no-mixed-spaces-and-tabs": [2],
    "no-multiple-empty-lines": [1, {
      max: 2,
    }],
    "no-negated-condition": [1],
    "no-nested-ternary": [1],
    "no-new-symbol": [2],
    "no-shadow-restricted-names": [2],
    "no-throw-literal": [2],
    "no-new-object": [2],
    "no-spaced-func": [1],
    "no-trailing-spaces": [2],
    "no-undef-init": [2],
    "no-underscore-dangle": [1, {
      allowAfterSuper: true,
      allowAfterThis: true,
    }],
    "no-undef": [2, {
      typeof: false,
    }],
    "no-unneeded-ternary": [1],
    "no-unused-labels": [2],
    "no-unused-vars": [1, {
      args: "all",
      argsIgnorePattern: "^__",
      caughtErrors: "none",
    }],
    "no-use-before-define": [1, {
      functions: false,
      classes: true,
    }],
    "no-useless-computed-key": [1],
    "no-useless-constructor": [1],
    "no-var": [1],
    "no-whitespace-before-property": [1],
    "object-curly-spacing": [1, "always"],
    "object-shorthand": [1],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "after"],
    "padded-blocks": [1, "never"],
    "prefer-spread": [1],
    "prefer-template": [1],
    radix: [1],
    semi: [1, "always"],
    "semi-spacing": [1, {
      before: false,
      after: true,
    }],
    "space-before-blocks": [1, {
      functions: "always",
      keywords: "always",
      classes: "always",
    }],
    "space-before-function-paren": [1, "never"],
    "space-in-parens": [1, "never"],
    "spaced-comment": [1, "always"],
    strict: [1, "global"],
    quotes: [1, "single", {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    "quote-props": [1, "as-needed"],
    "yield-star-spacing": [1, "both"],
  },
}
