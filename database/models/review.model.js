import mongoose, { Schema, model } from "mongoose";
const reviewSchema = new Schema({
    text: {
        type: String,
        trim:true
    },
    rate: {
        type:Number,
        enum:[1,2,3,4,5]
    },
    product: {
        type: Schema.ObjectId,
        ref: 'product',
        required:true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user'
        ,
        required:true
    }

}, { timestamps: true })
const reviewModel = mongoose.model('review', reviewSchema);
export default reviewModel 