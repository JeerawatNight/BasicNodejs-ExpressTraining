// ใช้งาน mongoose
const mongoose = require('mongoose')

// เชื่อมไปยัง mongoose
const dbUrl = 'mongodb://localhost:27017/productDB'
mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch(err=>console.log(err))

// ออกแบบ schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

// สร้างโมเดล
let Product = mongoose.model("products",productSchema)

// ส่งออกโมเดล
module.exports = Product

//ออกแบบฟังก์ชันก์สำหรับบันทึกข้อมูล
module.exports.saveProduct = function(model,data){
    model.save(data)
}