module.exports = {
    collectCoverage: true,
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testMatch: [
        '<rootDir>/app/**/*.test.ts',
    ],
    collectCoverageFrom: [
        'app/**/*.ts',
        '!app/**/index.ts',
    ],
}
