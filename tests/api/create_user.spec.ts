import { expect } from '@playwright/test';
import test from './base_test';

test.describe('Create user', () => {
    test('New user can be created', async ({ usersEndpoint }) => {
        const userData = {
            name: "morpheus",
            job: "leader"
        };
        const user = await usersEndpoint.createUser(userData);
        expect(user, 'User was created with incorrect data').toEqual(expect.objectContaining(
            { 
                ...userData,
                "id": expect.any(String),
                "createdAt": expect.any(String),
            }
        ));
    });
});