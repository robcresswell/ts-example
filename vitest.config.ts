import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    reporters: ['dot'],
    isolate: false, // just write good tests instead
    coverage: {
      enabled: false,
      include: ['src/**/*.ts'],
      reportsDirectory: './reports/coverage',
      reporter: ['html', 'text'],
    },
    restoreMocks: true, // dont share mock state between tests
  },
});
