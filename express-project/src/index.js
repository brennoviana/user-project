"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app/app.js");
const envConfig_js_1 = require("./config/envConfig.js");
const dbConfig_js_1 = require("./config/dbConfig.js");
const PORT = envConfig_js_1.config.port;
(0, dbConfig_js_1.connectToDatabase)();
app_js_1.app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
