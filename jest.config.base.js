module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    testEnvironment: 'node',
    collectCoverage: true,
    coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/dist/', '<rootDir>/node_modules/'],
    coverageDirectory: '<rootDir>/coverage/',
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    verbose: true,
};
