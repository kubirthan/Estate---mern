import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default:"https://static.vecteezy.com/ti/vecteur-libre/p1/2387693-icone-de-profil-utilisateur-vectoriel.jpg"
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User