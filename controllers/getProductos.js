import { ModeloProducto } from "../database/models/ModeloProducto.js";
import { formatearFiltrosDB } from "../helpers/functions.js"

export const getProductos = (req, res, next) => {
    const filtroNombre = formatearFiltrosDB(req.query.nombre);


    const filtros = {};
    if (filtroNombre) filtros.nombre = filtroNombre;
    

    ModeloProducto
        .find(filtros)
        .then((data) => {
            console.log("get mascotas =>", data);
            if (data.length === 0) {
                res.json([]);
            } else {
                res.json(data);
            }
        })
        .catch((error) => {
            next(error);
        });
}