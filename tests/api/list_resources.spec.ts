import { expect } from '@playwright/test';
import test from './base_test';

test.describe('List resources', () => {
    test('List of all resources can be requested', async ({ resourcesEndpoint }) => {
        const users = await resourcesEndpoint.getAllResources();
        const total = await resourcesEndpoint.getTotalResources();
        expect(users, 'List of all resources was incorrect, some of the resources were either missing or excessive')
            .toHaveLength(total);
    });
});