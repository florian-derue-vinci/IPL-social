module.exports = {
 testEnvironment: 'node',
 coverageDirectory: 'coverage',
 coverageReporters: ['text', 'lcov', 'html'],
 collectCoverageFrom: ['src/**/*.js'],
 testMatch: ['**/tests/**/*.test.js'],
 
 // Seuil minimum de coverage 70%
 coverageThreshold: {
 global: {
 functions: 70,
 lines: 70,
 },
 },
};