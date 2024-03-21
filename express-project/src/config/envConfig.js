"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    mongoUsername: process.env.MONGO_USERNAME,
    mongoPassword: process.env.MONGO_PASSWORD,
    mongoHost: process.env.MONGO_HOST,
    mongoPort: process.env.MONGO_PORT,
    mongoDatabase: process.env.MONGO_DATABASE,
    port: process.env.PORT
};
