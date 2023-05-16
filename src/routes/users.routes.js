const { Router } = require("express")

const UserController = require("../controller/UserController")

const userRoutes = Router()
const userControlls = new UserController()

userRoutes.post("/", userControlls.create)

module.exports = userRoutes