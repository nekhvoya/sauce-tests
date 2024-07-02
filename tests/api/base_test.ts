import { test as base } from '@playwright/test';
import { UsersEndpoint } from '../../src/api/users_endpoint';

export default base.extend<{ 
    usersEndpoint: UsersEndpoint }> ({
        usersEndpoint: async ({ request }, use) => {
            const usersEndpoint = new UsersEndpoint(request);
            await use(usersEndpoint);
          },
    });