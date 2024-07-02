import { expect } from '@playwright/test';
import test from './base_test';

test.describe('List users', () => {
    test('List of all users can be requested', async ({ usersEndpoint }) => {
        const users = await usersEndpoint.getAllUsers();
        const total = await usersEndpoint.getTotalNumberOfUsers();
        expect(users, 'List of all users was incorrect, some of the users were aither missing or excessive')
            .toHaveLength(total);
    });
});