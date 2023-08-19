import mongoose, { Schema, model } from "mongoose";
const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [10, 'this name is too short']
    },
    slug: {
        type: String,
        lowercase: true
    },
    logo: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    discount: { type: Number },
    priceAfterDiscount: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    description: {
        type: String,
        minlength: [10, 'too short product description'],
        maxlength: [100, 'description should be less than or equal 100 character'],
        required: true,
        trim: true

    },
    stock:
    {
        type: Number,
        default: 0,
        min: 0
    },
    sold: {
        type: Number,
        default: 0,
        min: 0
    },
    imgCover: {
        type: String,
        // required:true
    }
    , images: { type: [String] },
    category: {
        type: Schema.ObjectId,
        ref: "category",
        required: true
    },
    subCategory: {
        type: Schema.ObjectId,
        ref: "subCategory",
        required: true
    },
    brand: {
        type: Schema.ObjectId,
        ref: 'brand',
        required: true
    },
    createdBy: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    ratingAvg: {
        type: Number,
        min: 1,
        max: 5
    },
    ratingCount: {
        type: Number,
        min: 0
    }
    // ,sizes:{type:Number},
    // colors:{type:String}
}
    ,
    { timestamps: true })
const productModel = mongoose.model('product', productSchema);
export default productModel 