
import express from "express"
import "dotenv/config";
import cors from "cors"
import { conectarDB } from "./database/conexion.js";
import { mostrarDataRequest } from "./middlewares/mostrarDataRequest.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { getProductos } from "./controllers/getProductos.js";
import { getProductoById } from "./controllers/getProductoById.js";
import { postProducto } from "./controllers/postProducto.js";
import { putProducto } from "./controllers/putProducto.js";
import { deleteProducto } from "./controllers/deleteProducto.js";
import { postUsuario } from "./controllers/postUsuario.js";
import { loginUsuario } from "./controllers/loginUsuario.js";
import { controlarSesion } from "./middlewares/controlarSession.js";
import { logoutUsuario } from "./controllers/logoutUsuario.js";


const app = express();
const port = 3000;
app.use(express.json())
app.use(cors())
await conectarDB();

// middleware mostrar data request
app.use(mostrarDataRequest)

// llamada a la api
app.get("/", (req, res) => {res.send("API productos de arte")})

//endpoints:
app.post("/registrar", postUsuario)
app.post("/login", loginUsuario)

// middleware control de sesion valida
app.use(controlarSesion)

app.post("/logout", logoutUsuario)

app.get("/productos", getProductos)
app.get("/producto/:id", getProductoById)
app.post("/producto", postProducto)
app.put("/producto/:id", putProducto)
app.delete("/producto/:id", deleteProducto)


// middleware errorHandler
app.use(errorHandler)

//puerto
app.listen(port, () => {console.log(`Servidor corriendo en puerto ${port}`);})