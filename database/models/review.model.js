import mongoose, { Schema, model } from "mongoose";
const reviewSchema = new Schema({
    text: {
        type: String
    },
    rate:{
        type:String
    },
    productId: {
        type: Schema.ObjectId,
        ref: 'product'
    },
    userId: {
        type: Schema.ObjectId,
        ref: 'user'
    }

},{timestamps:true})
const reviewModel = mongoose.model('review', reviewSchema);
export default reviewModel 