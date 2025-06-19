import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import {test} from "./backend/controllers/palabras.clave.controller.js";

dotenv.config()
mongoose.connect(process.env.url)
.then(()=>{
    console.log("Funciono la conexion con la base de datos")
})
.catch((error)=>{
    console.log("Huvo un error en la conexion a la base de datos", error)
})

const app = express()
app.use(cors())

app.listen(4000, ()=>{
    console.log("Funciona el servidor local")
})

test()