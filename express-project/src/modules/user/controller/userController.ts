import { userModel } from "../model/userModel";
import { Request, Response } from "express";

class UserController {
  async getAll(req: Request, res: Response) {
    try {
      const users = await userModel.find();

      if(users.length == 0){
        return res.status(404).send({ message: 'Nenhum usuário cadastrado'})
      };

      res.status(200).send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro interno do servidor'});
    }
  };

  async post(req: Request, res: Response) {
    try {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).send({ Error: error});
    }
  };

  async delete(req: Request, res: Response) {
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
  
      if (!user) {
        return res.status(404).send({ message: 'Usuário não encontrado!' });
      }
      res.status(200).send({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
      res.status(500).send({ Error: error});
    }
  };
}

const userController = new UserController();
export { userController };