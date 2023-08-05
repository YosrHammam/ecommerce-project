import categoryRouter from "./modules/category/category.routes.js "

const bootstrap = (app,express)=>{
    app.use(express.json())
    app.use('/api/v1/categories',categoryRouter)
    app.use('*',(req,res,next)=>{
return res.json({message:"invalid routing"})
    })
}
export default bootstrap