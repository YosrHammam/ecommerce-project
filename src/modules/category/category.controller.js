import categoryModel from "../../../database/models/category.model.js"
import slugify from "slugify"
const addCategory =async(req,res,next)=>{
    const {name} =req.body
// req.body.slug =slugify(req.body.name)
// const category = new categoryModel({req.body})
const category = new categoryModel({name,slug:slugify(name)})
await category.save()
res.status(201).json({message:"success",category})

}
export{addCategory
,}