module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/__tests__'],
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage/',
  coveragePathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '(__tests__/.*.mock).ts?$',
  ],
  coverageReporters: ['clover', 'cobertura', 'json', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -5,
    },
  },
  reporters: ['default', 'jest-junit'],
  verbose: true,
};
