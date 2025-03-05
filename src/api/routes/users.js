const { getUsers, register } = require("../controllers/users")
const usersRoutes = require("express").Router()

usersRoutes.get("/", getUsers)
usersRoutes.post("/register", register)

module.exports = usersRoutes