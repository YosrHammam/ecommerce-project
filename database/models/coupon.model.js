import mongoose, { Schema,model } from "mongoose";
const couponSchema = new Schema({
   code:{type:String},
   expire:{type:Date},
   discount:{type:Number}
})
const couponModel = mongoose.model('coupon',couponSchema)
export default couponModel