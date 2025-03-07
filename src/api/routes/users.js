const { isAuth } = require("../../middlewares/auth")
const { getUsers, register, login } = require("../controllers/users")
const usersRoutes = require("express").Router()


usersRoutes.get("/",[isAuth],getUsers)
usersRoutes.post("/register", register)
usersRoutes.post("/login", login)

module.exports = usersRoutes