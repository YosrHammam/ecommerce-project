import express from 'express'
import { dbConnection } from './database/dbConnection.js';
import categoryModel from './database/models/category.model.js';
import subCategoryModel from './database/models/subCategory.model.js';
import productModel from './database/models/product.model.js';
import userModel from './database/models/user.model.js';
import brandModel from './database/models/brand.model.js';
import cartModel from './database/models/cart.model.js';
import reviewModel from './database/models/review.model.js';
import couponModel from './database/models/coupon.model.js';
import orderModel from './database/models/order.model.js';
import bootstrap from './src/index.router.js';
const app = express()
const port = 5004;
bootstrap(app,express)
dbConnection()
categoryModel
subCategoryModel
productModel
userModel
brandModel
cartModel
couponModel
reviewModel
orderModel
app.listen(port,()=>{
    console.log(`server is running at port ${port}`
    );
})
