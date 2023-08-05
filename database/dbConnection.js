import mongoose from 'mongoose'
export function dbConnection() {
    return mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_app').then(() => {
        console.log('database connected');
    }).catch((err) => {
        console.log("database error : ", err);
    }
    )
}
