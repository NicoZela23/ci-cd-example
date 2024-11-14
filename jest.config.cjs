module.exports = {
  // Specifies the test environment
  testEnvironment: "jsdom",

  // The root directory that Jest should scan for tests and modules
  roots: ["<rootDir>/src"],

  // File extensions Jest looks for
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],

  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text", "json-summary"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/dist/**",
    "!**/coverage/**",
  ],

  // Module name mapping for handling assets and styles
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    "\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle image imports
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/__mocks__/fileMock.js",

    // Handle module aliases (if you're using path aliases in your vite config)
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Test file patterns
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],

  // Transform files
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "babel-jest",
      { presets: ["@babel/preset-env", "@babel/preset-react"] },
    ],
  },

  // Setup files to run before tests
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  // Test environment options
  testEnvironmentOptions: {
    url: "http://localhost",
  },

  // Indicates whether the coverage information should be collected while executing the test
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  // Other configurations
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],

  // Clear mocks between every test
  clearMocks: true,

  // Automatically reset mock state before every test
  resetMocks: true,

  // Automatically restore mock state between every test
  restoreMocks: true,
};
