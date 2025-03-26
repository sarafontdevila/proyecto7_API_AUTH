const { isAdmin, isAuth} = require("../../middlewares/auth")
const {getCursos, postCurso, putCurso, deleteCurso} = require("../controllers/cursos")

const cursosRouter = require("express").Router()

cursosRouter.put("/:id", [isAdmin],putCurso)
cursosRouter.delete("/:id",[isAdmin],deleteCurso)
cursosRouter.post("/",[isAdmin],postCurso)
cursosRouter.get("/", getCursos)

module.exports = cursosRouter