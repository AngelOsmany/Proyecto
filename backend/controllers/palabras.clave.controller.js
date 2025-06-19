import { palabrasClaveModel } from "../models/palabras.clave.model.js";

export const test_palabrasClave = ()=>{
    console.log("Controlador de palabras clave funciona")
}
palabrasClaveModel.create({
    palabras:"xddddddddddddddddd"
})

export const test = ()=>{
    console.log("Se subio a la base de datos")
}