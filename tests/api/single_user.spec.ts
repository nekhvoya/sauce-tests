import { expect } from '@playwright/test';
import test from './base_test';

test.describe('Single user', () => {
    test('User can be requested by id', async ({ usersEndpoint }) => {
        const user = await usersEndpoint.getUserById(1);
        expect(user.data).toEqual(expect.objectContaining(
            { 
                "id": 1,
                "email": "george.bluth@reqres.in",
                "first_name": "George",
                "last_name": "Bluth" 
            }
        ));
    });
});