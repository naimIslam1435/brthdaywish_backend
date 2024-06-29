const router = require("express").Router();
const Data = require('../models/Data');

router.post("/info", async (req, res) => {
    const newInfo = new Data(req.body)
    console.log(newInfo);   

    try {
        const info = await newInfo.save();
        res.status(201).json(info)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/info", async (req, res) => {
    try {
        const info = await Data.find()
        res.status(200).json(info)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;