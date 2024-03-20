import userModel from "../model/userModel.js";

class UserController {
  async getAll(req, res) {
    try {
      const users = await userModel.find();

      if(users.length == 0){
        return res.status(404).send({ message: 'Nenhum usuário cadastrado'})
      };

      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Erro interno do servidor'});
    }
  };

  async post(req, res) {
    try {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.status(201).send(newUser);
    } catch (error) {
      res.status(400).send({ Error: error});
    }
  };

  async delete(req, res){
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

export default new UserController();
