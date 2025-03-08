const Curso = require("../models/cursos")

const getCursos = async (req, res, next) => {
  try {
    const cursos = await Curso.find({verified:true});
    return res.status(200).json(cursos)
  } catch (error) {
    return res.status(400).json("Error en get") 
  }
}
const getCursosNotVerified = async (req, res, next) => {
  try {
    const cursos = await Curso.find({verified:false});
    return res.status(200).json(cursos)
  } catch (error) {
    return res.status(400).json("Error en get") 
  }
}


const getCursosById = async (req, res, next) => {
  try {
    const {id }= req.params
    const curso = await Curso.findById(id)
    return res.status(200).json(app)
    
  } catch (error) {
    return res.status(400).json("Error en getByID")
    
  }
}
const getCursosByTema = async (req, res, next) => {
  try {
    const { tema }= req.params
    const cursos = await Curso.find({tema: tema})
    return res.status(200).json(cursos)
  } catch (error) {
    return res.status(400).json("Error en getByTema")
    
  }
}
const getCursosByPrice = async (req, res, next) => {
  try {
    const { precio }= req.params
    const apps = await Curso.find({precio: {$lt: precio}})
    return res.status(200).json(cursos)
    
  } catch (error) {
    return res.status(400).json("Error en getByPricePro")
    
  }
}
const postCurso = async (req, res, next) => {
  try {
    const newCurso = new Curso(req.body)

    if(req.user.rol === "admin") {newCurso.verified = true

    }else {
      newCurso.verified = false
    }
    const cursoSaved = await newCurso.save()
    return res.status(201).json(cursoSaved)
    
  } catch (error) {
    return res.status(400).json("Error en post")
    
  }
}
const putCurso = async (req, res, next) => {
  try {
    const { id }= req.params
    const newCurso = new Curso(req.body)
    newCurso._id = id
    const cursoUpdated = await Curso.findByIdAndUpdate(id, newCurso, {new: true})
    return res.status(200).json(cursoUpdated)

  } catch (error) {
    return res.status(400).json("Error en put")
  }
}
const deleteCurso = async (req, res, next) => {
  try {
    const {id }= req.params
    const cursoDeleted = await Curso.findByIdAndDelete(id)
    return res.status(200).json(cursoDeleted)
  } catch (error) { 
    return res.status(400).json("Error en delete")
    
  }
}
module.exports = {
  getCursos,
  getCursosById,
  getCursosByTema,
  getCursosByPrice,
  postCurso,
  putCurso,
  deleteCurso,
  getCursosNotVerified
}