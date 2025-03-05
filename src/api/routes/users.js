const usersRoutes = require("express").Router()

usersRoutes.get("/", getUsers)

module.exports = usersRoutes