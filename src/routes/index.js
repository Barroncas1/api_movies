const { Router } = require("express")

const notesRouter = require("./notes.routes")

const routes = Router()
routes.use("/notes", notesRouter)

module.exports = routes