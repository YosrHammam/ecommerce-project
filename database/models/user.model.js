import mongoose, { Schema, model } from "mongoose";
const userSchema = new Schema({
    name: {
        type: String,
        minlength: [2, 'this name is too short'],
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    blocked: {
        type: Boolean,
        default: false
    },
    role:{enum:['admin','user']},
    wishList:{type:[String]}
})
const userModel = mongoose.model('user', userSchema);
export default userModel