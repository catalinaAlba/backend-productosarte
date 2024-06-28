import { ModeloProducto } from "../database/models/ModeloProducto.js";


export const getProductoById = (req, res, next) => {
    const idProducto = req.params.id;

    ModeloProducto
        .findOne({ id: idProducto })
        .then((data) => {
            if (!data) {
                throw new Error(`No existe ningun producto con el Id ${idProducto}`);
            }
            else {
                res.json(data);
            }
        })
        .catch((error) => {
            next(error);
        })
}