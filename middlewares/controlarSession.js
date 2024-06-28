import { ModeloUsuario } from "../database/models/ModeloUsuario.js";


export const controlarSesion = async (req, res, next) => {
    try {
        const authHeader = req.headers["authorization"];
        console.log(authHeader);
        // obtengo el auth header de los encabezados (headers) de la request
        if (!authHeader) {
            throw { statusCode: 401, message: "No autorizado" }
        }

        // busco usuario con el token del header
        const usuario = await ModeloUsuario.findOne({ session: authHeader })

        if (usuario) {
            req.usuario = usuario;
            next()
        }
        else {
            throw { statusCode: 401, message: "No autorizado" }
        }
    }
    catch (error) {
        next(error)
    }
}