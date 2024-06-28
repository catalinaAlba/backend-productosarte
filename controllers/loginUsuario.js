import { ModeloUsuario } from "../database/models/ModeloUsuario.js";


export const loginUsuario = async (req, res, next) => {
    const { email, password } = req.body;

    //busca un usuario con email y contraseña que llega en el body
    const usuario = await ModeloUsuario.findOne({ email, password })

    if (usuario) {
        //crear y guardar el token
        usuario.session = Math.random().toString(36).slice(2);

        usuario
            .save()
            .then(() => {
                res.json({ session: usuario.session, user: usuario })
            })
            .catch((error) => {
                next(error)
            })
        // devolver el token
    }
    else {
        next(new Error("Usuario o contraseña incorrecta"))
    }
}