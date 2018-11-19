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
  testResultsProcessor: "jest-teamcity-reporter",
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    '!**/node_modules/**',
    '!src/components/introduction/**/*',
    'src/validations/**/*.js',
    '!src/validations/**/index.js',
    'src/components/**/*.{js,vue}',
    '!src/components/**/*.story.{js,vue}',
    '!src/components/**/*.stories.js',
    '!src/components/**/index.js',
    'src/directives/**/*.{js,vue}',
    '!src/directives/**/*.stories.js',
    '!src/directives/**/index.js',
    '!src/main.stories.js'
  ],
};
