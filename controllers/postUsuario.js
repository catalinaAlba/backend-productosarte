import { ModeloUsuario } from "../database/models/ModeloUsuario.js";
import { obtenerProximoId } from "../helpers/functions.js";


export const postUsuario = async (req, res, next) => {
    const { nombre, apellido, email, password } = req.body;

    try {
        // verificamos si existe usuario con email
        // el await sustituye al .then, preguntar
        const usuarioExistente = await ModeloUsuario.findOne({ email: email })
        if (usuarioExistente) {
            throw new Error("El email ya esta en uso");
        }

        const nuevoUsuario = new ModeloUsuario();
        nuevoUsuario.id = await obtenerProximoId(ModeloUsuario)
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.apellido = apellido;
        nuevoUsuario.email = email;
        nuevoUsuario.password = password;

        nuevoUsuario
            .save()
            .then(() => {
                res.json({ message: `Nuevo usuario creado con el id ${nuevoUsuario.id}` });
            })
            .catch((error) => {
                next(error)
            })
    }
    catch (error) { next(error) }
}