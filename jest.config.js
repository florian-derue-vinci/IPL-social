module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],

  collectCoverageFrom: ['src/**/*.ts'],
  testMatch: ['**/tests/**/*.test.ts'],

  // Seuil minimum de coverage 70%
  coverageThreshold: {
    global: {
      functions: 70,
      lines: 70,
    },
  },
};