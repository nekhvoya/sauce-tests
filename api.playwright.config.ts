import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests/api',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: process.env.CI ? 4 : undefined,
    reporter: [['html', { outputFolder: 'playwright-report/api' }]],
    use: {
        baseURL: 'https://reqres.in/'
    }
}); 