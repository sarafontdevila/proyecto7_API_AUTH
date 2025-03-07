require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const { connectDB } = require ("./src/config/db")
const cursosRouter = require("./src/api/routes/cursos")
const plataformasRouter = require("./src/api/routes/plataformas")
const usersRoutes = require("./src/api/routes/users")


const app = express()
app.use(express.json())
<<<<<<< HEAD
=======

connectDB()
>>>>>>> cc8683c32ddac182ab18d628e92e52340f859d44

app.use("/api/v1/plataformas/", plataformasRouter)
app.use("/api/v1/cursos/", cursosRouter)
app.use("/api/v1/users", usersRoutes)


app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found")
})

app.listen(3000, () => {
  console.log("Servidor corriendo en: http://localhost:3000 😜")
})

