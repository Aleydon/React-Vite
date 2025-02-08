// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
	moduleNameMapper: {
		'^@/src/(.*)$': '<rootDir>/$1',
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
		'^@/constants/(.*)$': '<rootDir>/src/constants/$1',
		'^@/utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@/assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@/services/(.*)$': '<rootDir>/src/services/$1',
		'^@/contexts/(.*)$': '<rootDir>/src/contexts/$1'
	}
};
