import { ModeloUsuario } from "../database/models/ModeloUsuario.js";


export const logoutUsuario = async (req, res, next) => {
    const token = req.headers["authorization"];

    const usuario = await ModeloUsuario.findOne({ session: token });

    if (usuario) {
        usuario.session = null;
        await usuario.save();
        res.json({message: "sesion cerrada con exito"})
    }
    else{
        next(new Error("no se encontro el usuario"))
    }
}