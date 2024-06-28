export const errorHandler = (error, req, res, next) =>{
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Error inesperado"

    console.error("\x1b[31m", `Error: (${statusCode}):`,error.stack)

    return res.status(statusCode).json({error: errorMessage})
}