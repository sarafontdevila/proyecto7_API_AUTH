const {getCursos, getCursosById, getCursosByTema, getCursosByPrice, postCurso, putCurso, deleteCurso} = require("../controllers/cursos")

const cursosRouter = require("express").Router()


cursosRouter.get("/:id", getCursosById)
cursosRouter.get("/tema/:tema", getCursosByTema)
cursosRouter.get("/precio/:precio", getCursosByPrice)
cursosRouter.put("/:id", putCurso)
cursosRouter.delete("/:id", deleteCurso)
cursosRouter.post("/", postCurso)
cursosRouter.get("/", getCursos)

module.exports = cursosRouter