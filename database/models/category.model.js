import mongoose, { Schema,model } from "mongoose";
const categorySchema = new Schema({
    name:{
        type:String,
        minlength:[2,'this category name is too short'],
        unique:true,
        required:true,
        trim:true
    },slug:{
        type:String,
        lowercase:true
    },
    image:{
        type:String,
        // required:true
    }
},{timestamps:true})
const categoryModel = mongoose.model('category',categorySchema);
export default categoryModel 