 import dotenv from "dotenv";
import dns from "dns";
// import express from "express";
import { app } from "./app.js";


import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// const app = express();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MONGODB connection failed!!!", err);
    });





/*
import express from "express"
const app = express()
(async () =>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
    } catch (error) {
        console.error("ERROR:",error)
        throw err
    }
})()
 */   