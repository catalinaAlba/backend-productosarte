import { Schema, model } from "mongoose";

const schemaProducto = new Schema({
    id: {type: Number, unique: true},
    nombre: String,
    categoria: String,
    tipo: String,
    precio: Number
})

export const ModeloProducto = model("Producto", schemaProducto)