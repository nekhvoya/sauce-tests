export const randomAlphaNumberic = (length: number) => {
    return randomString(length, "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
}

export const randomNumberic = (length: number) => {
    return randomString(length, "0123456789")
}

const randomString = (length: number, charset: string) => {
    let result = '';
    const charactersLength = charset.length;
    let counter = 0;
    while (counter < length) {
      result += charset.charAt(Math.floor(Math.random() * charactersLength));
      counter++;
    }
    return result;
}