import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    nome     : String,
    username : String,
    email    : String,
    senha    : String
});

const userModel = mongoose.model('User', userSchema);

export default userModel;