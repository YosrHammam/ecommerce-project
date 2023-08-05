import mongoose, { Schema, model } from "mongoose";
const subCategorySchema = new Schema({
    name: {
        type: String,
        unique:true,
        required: true,
        trim:true,
        minlength: [2, 'this name is too short']
    },
    slug: {
        type: String,
        lowercase:true
    },
    category: {
        type: Schema.ObjectId,
        ref:'category',
        required: true
    }
})
const subCategoryModel = mongoose.model('subCategory', subCategorySchema);
export default subCategoryModel