const mongoose =require("mongoose")

const cursoSchema = new mongoose.Schema({
  nombre:{type:String, required:true},
  imagen:{type:String, required:true},
  precio:{type:Number, required:true},
  tema: {type: String, required:true, enum:
    ["marketing",
     "tecnologia",
    "finanzas"
    ]
  }
},
{
  timestamps:true,
  collection:"cursos"
})

const Curso = mongoose.model("cursos",cursoSchema, "cursos")
module.exports = Curso