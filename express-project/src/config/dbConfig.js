"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const envConfig_1 = require("./envConfig");
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(`mongodb://${envConfig_1.config.mongoUsername}:${envConfig_1.config.mongoPassword}@${envConfig_1.config.mongoHost}:${envConfig_1.config.mongoPort}/${envConfig_1.config.mongoDatabase}?authSource=admin`);
        console.log('Conexão com o MongoDB estabelecida com sucesso.');
    }
    catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
});
exports.connectToDatabase = connectToDatabase;
