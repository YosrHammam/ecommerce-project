import mongoose, { Schema,model } from "mongoose";
const orderSchema = new Schema({
    name:{type:String},
    price:{type:Number}
})
const orderModel = mongoose.model('order',orderSchema)
export default orderModel