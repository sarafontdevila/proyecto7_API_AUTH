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
    const newUser = new User(req.body)

    const userSaved = await newUser.save()

    return res.status(201).json(userSaved)
    
  } catch (error) {
    return res.status(400).json(error)
    
  }
}

module.exports = { getUsers, register}