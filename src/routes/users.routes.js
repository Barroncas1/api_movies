const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UserController = require("../controller/UserController")
const UsersAvatarController = require("../controllers/UsersAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const userRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const userControlls = new UserController()
const usersAvatarController = new UsersAvatarController()


userRoutes.post("/", userControlls.create)
userRoutes.put("/", ensureAuthenticated, userControlls.update)
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update)
module.exports = userRoutes