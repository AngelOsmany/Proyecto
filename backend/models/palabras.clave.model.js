import { Schema, model } from "mongoose";

const palabrasClaveSchema = new Schema({
    palabras:{
        type:String
    }
})

export const palabrasClaveModel = new model("palabras",palabrasClaveSchema)
