// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from './db/index.js';


dotenv.config()

connectDB()












// const app =express();
// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
//     }
//     catch(error){
//         console.log("Error: ",error)
//         throw error
//     }
// })()