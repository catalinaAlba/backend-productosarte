import { ModeloProducto } from "../database/models/ModeloProducto.js";
import { obtenerProximoId } from "../helpers/functions.js";


export const postProducto = async (req, res, next) => {
    const { nombre, categoria, tipo, precio } = req.body;

    const nuevoProducto = new ModeloProducto();
    
    nuevoProducto.id = await obtenerProximoId(ModeloProducto);
    nuevoProducto.nombre = nombre;
    nuevoProducto.categoria = categoria;
    nuevoProducto.tipo = tipo;
    nuevoProducto.precio = precio;

    nuevoProducto
        .save()
        .then(() => {
            res.send(`Nuevo producto creado con el id ${nuevoProducto.id}`);
        })
        .catch((error) => {
            next(error)
        })
}
