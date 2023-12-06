const Router = require('express')
const router = new Router()
const authMiddleware = require("../middleware/auth.middleware")
const dataController = require("../controllers/dataControllers")

router.get("/", authMiddleware, dataController.getData)
router.get("/details", authMiddleware, dataController.getAllDataFromAddress)
router.post("/add-address", authMiddleware, dataController.postData)

module.exports = router