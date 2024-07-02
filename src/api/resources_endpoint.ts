import { APIRequestContext, expect } from "@playwright/test";
import { collectObjects } from "./objects_collection";

export class ResourcesEndpoint {
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getTotalResources() {
        const resourcesPerPage = await this.requestResourcesPerPage(1);
        expect(resourcesPerPage.ok(), `Not able to get total number of resources, response ${await resourcesPerPage.status()}`).toBeTruthy();
        return (await resourcesPerPage.json()).total;
    }

    async getAllResources() {
        return collectObjects(this.requestResourcesPerPage.bind(this));
    }

    requestResourcesPerPage(pageNo: number) {
        return this.request.get(`/api/unknown?page=${pageNo}`);
    }
}