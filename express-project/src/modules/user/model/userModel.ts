import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name     : String,
    username : String,
    email    : String,
    password    : String
},{timestamps: true});

export const userModel = mongoose.model('User', userSchema);