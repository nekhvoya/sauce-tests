export async function collectObjects(objectsPerPageFunction: Function) {
    const users: any = [];

    for(let i = 1; i <= 1000; i++) {
        const pageObjectsResponse = await objectsPerPageFunction(i);
        if(pageObjectsResponse.status() !== 200 || (await pageObjectsResponse.json()).data.length === 0) {
            console.log(`No users found on page ${i}`);
            break;
        }
        users.push(...(await pageObjectsResponse.json()).data);
    }
    return users;
}