const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [
    "<rootDir>/(node_modules)/"
  ],
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!components/introduction/**/*',
    'components/**/*.{js,vue}',
    '!components/**/*.stories.js',
    '!components/**/index.js',
    'directives/**/*.{js,vue}',
    '!directives/**/*.stories.js',
    '!directives/**/index.js',
    '!main.stories.js'
  ],
};
