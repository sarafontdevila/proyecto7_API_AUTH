const { isAdmin } = require("../../middlewares/auth")
const {getCursos, getCursosById, getCursosByTema, getCursosByPrice, postCurso, putCurso, deleteCurso, getCursosNotVerified} = require("../controllers/cursos")

const cursosRouter = require("express").Router()

cursosRouter.get("/notVerified",[isAdmin],getCursosNotVerified)
cursosRouter.get("/:id", getCursosById)
cursosRouter.get("/tema/:tema", getCursosByTema)
cursosRouter.get("/precio/:precio", getCursosByPrice)
cursosRouter.put("/:id", [isAdmin],putCurso)
cursosRouter.delete("/:id",[isAdmin],deleteCurso)
cursosRouter.post("/",postCurso)
cursosRouter.get("/", getCursos)

module.exports = cursosRouter