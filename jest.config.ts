import nextJest from 'next/jest';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './'
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest' // Transformar arquivos TypeScript
  }
};

export default createJestConfig(config);
