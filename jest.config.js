module.exports = {
    collectCoverage: true,
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    collectCoverageFrom: [
        'app/**/*.ts',
        '!app/**/index.ts',
    ],
}
