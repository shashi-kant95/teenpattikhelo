import { Client, Account, Databases } from 'appwrite';

const appwrite = new Client();

appwrite
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65df23ffd61547de9abd')

    export const account = new Account(appwrite);
    export const databases = new Databases(appwrite);
    export const databaseId = '65df2f4d0c009ccd51c4';
    export const userDocId = '65df2f5b1ce2e2091d21';
    export const cardDocId = '65e113fa9a6d0f698b87';