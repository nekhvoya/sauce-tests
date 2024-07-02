import { APIRequestContext, expect } from "@playwright/test";

export class UsersEndpoint {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getUserById(id) {
        const userById = await this.requestUserById(id);
        expect(userById.ok(), `Not able to get user by id ${id}, response ${await userById.status()}`).toBeTruthy();
        return await userById.json();
    }

    async requestUserById(id) {
        return await this.request.get(`/api/users/${id}`);
    }

    async getTotalNumberOfUsers() {
        const usersPerPage = await this.requestUsersPerPage(1);
        expect(usersPerPage.ok(), `Not able to get total number of users, response ${await usersPerPage.status()}`).toBeTruthy();
        return (await usersPerPage.json()).total;
    }

    async getAllUsers() {
        const users: any = [];

        for(let i = 1; i <= 1000; i++) {
            const pageUsersResponse = await this.requestUsersPerPage(i);
            if(pageUsersResponse.status() !== 200 || (await pageUsersResponse.json()).data.length === 0) {
                console.log(`No users found on page ${i}`);
                break;
            }
            users.push(...(await pageUsersResponse.json()).data);
        }
        return users;
    }

    async requestUsersPerPage(pageNo) {
        return await this.request.get(`/api/users?page=${pageNo}`);
    }
}