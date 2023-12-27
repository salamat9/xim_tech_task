import { config } from 'dotenv';
config();

const appConfig = {
    port: process.env.PORT,
    database: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    },
}

export default appConfig;
