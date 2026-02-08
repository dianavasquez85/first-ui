import type { Config } from "jest";

const config: Config = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "./tsconfig.jest.json" }]
    },
    setupFilesAfterEnv: ["<rootDir>/src/test/setup.ts"],
    moduleNameMapper: {
        "\\.(css|less|scss)$": "<rootDir>/src/test/styleMock.ts"
    }
};

export default config;
