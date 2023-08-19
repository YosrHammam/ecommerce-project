import express from 'express'
const categoryRouter = express.Router()
import * as category from  './category.controller.js'
categoryRouter.post('/',category.addCategory)
categoryRouter.get('/',category.getAllCategories)
// categoryRouter.get('/',(req,res,next)=>{
//     res.json({message:"category api "})
//         })
export default categoryRouter