import { ModeloProducto } from "../database/models/ModeloProducto.js";


export const putProducto = (req, res, next) => {
    const idProducto = req.params.id;
    const { nombre, categoria, tipo, precio } = req.body;

    const datosNuevos = {}
    if (nombre) datosNuevos.nombre = nombre;
    if (categoria) datosNuevos.categoria = categoria;
    if (tipo) datosNuevos.tipo = tipo;
    if (precio) datosNuevos.precio = precio;

    ModeloProducto
        .updateOne({ id: idProducto }, datosNuevos)
        .then((data) => {
            if (data.matchedCount === 0) {
                throw new Error(`No existe producto con el id ${idProducto}`)
            }
            res.json({ message: `Producto con el id ${idProducto} modificada correctamente` })
        })
        .catch((error) => {
            next(error)
        })
}