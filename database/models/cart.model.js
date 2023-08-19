import mongoose, { Schema, model } from "mongoose";
const cartSchema = new Schema({
    name: { type: String }
}
    ,
    { timestamps: true })
const cartModel = mongoose.model('cart', cartSchema)
export default cartModel