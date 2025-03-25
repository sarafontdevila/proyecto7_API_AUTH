const { isAdmin } = require("../../middlewares/auth")
const { getUsers, deleteUser, putUser, register, login } = require("../controllers/users")
const usersRoutes = require("express").Router()


usersRoutes.get("/",[isAdmin],getUsers)
usersRoutes.post("/register", register)
usersRoutes.post("/login", login)
usersRoutes.put("/:id", putUser)
usersRoutes.delete("/:id", deleteUser)

module.exports = usersRoutes
