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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userModel_1 = require("../model/userModel");
class UserController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield userModel_1.userModel.find();
                if (users.length == 0) {
                    return res.status(404).send({ message: 'Nenhum usuário cadastrado' });
                }
                ;
                res.status(200).send(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Erro interno do servidor' });
            }
        });
    }
    ;
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = new userModel_1.userModel(req.body);
                yield newUser.save();
                res.status(201).send(newUser);
            }
            catch (error) {
                res.status(400).send({ Error: error });
            }
        });
    }
    ;
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.userModel.findByIdAndDelete(req.params.id);
                if (!user) {
                    return res.status(404).send({ message: 'Usuário não encontrado!' });
                }
                res.status(200).send({ message: 'Usuário deletado com sucesso!' });
            }
            catch (error) {
                res.status(500).send({ Error: error });
            }
        });
    }
    ;
}
const userController = new UserController();
exports.userController = userController;
