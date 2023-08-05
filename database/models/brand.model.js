import mongoose, { Schema, model } from "mongoose";
const brandSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    logo: {
        type: String,
        required:true
    },
    slug: {
        type: String,
        lowercase: true
    }
})
const brandModel = mongoose.model('brand', brandSchema)
export default brandModel