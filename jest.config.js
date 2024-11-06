module.exports = {
  preset: 'next/babel', // Use Next.js Babel preset
  testEnvironment: 'jsdom', // Use JSDOM for the test environment
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // Extend Jest with custom matchers
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use Babel to transpile JS/JSX/TS/TSX files
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy', // Mock CSS imports
  },
}
