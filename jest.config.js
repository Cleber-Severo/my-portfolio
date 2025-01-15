/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.jest.json", // Move the tsconfig here
      },
    ],
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
  moduleNameMapper: {
    "\\.png$": "<rootDir>/__mocks__/fileMock.js", // Ensure forward slashes here},
    "\\.css$": "<rootDir>/__mocks__/styleMock.js", // Mock for CSS files
  },
};