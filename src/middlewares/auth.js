const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const parsedToken = token.replace('Bearer, ', '')
    const verified = verifyJwt(parsedToken)

    console.log(verified)

    next()
  } catch (error) {
    return res.status(400).json('No estas autorizado')
  }
}

module.exports = { isAuth }
