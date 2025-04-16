import {promises as fs} from 'fs'
import express from 'express'
const router = express.Router();

router.get('/getUsers', async (req, res) => {
    let allUsers = await req.models.User.find()
    res.json(allUsers)
})

router.post('/users', async (req, res) => {
    console.log(req.body)

    const newUser = new req.models.User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        favorite_ice_cream: req.body.favorite_ice_cream
    })

    await newUser.save()

    res.send("success")
})

export default router;