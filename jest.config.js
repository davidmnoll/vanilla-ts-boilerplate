module.exports = {
    verbose: true,
    setupFilesAfterEnv: ["./.jest/setupTests.ts"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
      "\\.(less|scss)$": "identity-obj-proxy",
      "\\.(css)$": "jest-css-modules"
    },
    transform: {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    testEnvironment: 'jest-environment-jsdom',
  };

  