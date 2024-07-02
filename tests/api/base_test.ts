import { test as base } from '@playwright/test';
import { UsersEndpoint } from '../../src/api/users_endpoint';
import { ResourcesEndpoint } from '../../src/api/resources_endpoint';

export default base.extend<{ 
    usersEndpoint: UsersEndpoint,
    resourcesEndpoint: ResourcesEndpoint }> ({
        usersEndpoint: async ({ request }, use) => {
            const usersEndpoint = new UsersEndpoint(request);
            await use(usersEndpoint);
        },
        resourcesEndpoint: async ({ request }, use) => {
            const resourcesEndpoint = new ResourcesEndpoint(request);
            await use(resourcesEndpoint);
        },
    });