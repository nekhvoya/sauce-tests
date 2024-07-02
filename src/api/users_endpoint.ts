import { APIRequestContext, expect } from "@playwright/test";
import { collectObjects } from "./objects_collection";

export class UsersEndpoint {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async createUser(userData) {
        const createdUser = await this.requestUserCreation(userData);
        expect(createdUser.ok(), `Not able to create user with data ${userData}, response ${await createdUser.status()}`).toBeTruthy();
        return await createdUser.json();
    }

    requestUserCreation(userData) {
        return this.request.post('/api/users', { data: userData });
    }

    async getUserById(id) {
        const userById = await this.requestUserById(id);
        expect(userById.ok(), `Not able to get user by id ${id}, response ${await userById.status()}`).toBeTruthy();
        return await userById.json();
    }

    requestUserById(id) {
        return this.request.get(`/api/users/${id}`);
    }

    async getTotalUsers() {
        const usersPerPage = await this.requestUsersPerPage(1);
        expect(usersPerPage.ok(), `Not able to get total number of users, response ${await usersPerPage.status()}`).toBeTruthy();
        return (await usersPerPage.json()).total;
    }

    async getAllUsers() {
        return collectObjects(this.requestUsersPerPage.bind(this));
    }

    requestUsersPerPage(pageNo) {
        return this.request.get(`/api/users?page=${pageNo}`);
    }
}