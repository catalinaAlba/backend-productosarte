import mongoose from "mongoose";

const urlDatabase = process.env.MONGODB_URL;

export const conectarDB = () => {
    return mongoose
        .connect(urlDatabase)
        .then(() => {
            console.log("conectado a la DB!")
        })
        .catch(() => {
            console.log("error conectando a la DB!", error);
        })
}