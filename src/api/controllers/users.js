const User = require("../models/users")

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }

}

const register = async (req, res, next) => { 
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: "user"
    })
    const duplicateUser = await User.findOne ({userName: req.body, userName})
    if (duplicateUser) {
      return res.status(400).json( "No válido, busca otro nombre 🤓")

    }

    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
    
  } catch (error) {
    return res.status(400).json(error)
    
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName})
    if (!user){
      return res.status(400).json("usuario no válido")
    }
    return res.status(400).json("Usuario si válido")
    
  } catch (error) {
    return res.status(400).json(error)
    
  }
}

module.exports = { getUsers, register, login}