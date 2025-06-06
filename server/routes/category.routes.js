const express = require("express")
const auth = require("../middleware/auth.middleware")
const Category = require("../models/Category")
const router = express.Router({mergeParams: true})

router.get("/", auth, async (req, res) => {
    try {
        const list = await Category.find();
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

module.exports = router