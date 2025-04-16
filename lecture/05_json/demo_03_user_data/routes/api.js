import {promises as fs} from 'fs'
import express from 'express'
const router = express.Router();

router.get('/getUsers', async (req, res) => {
    const data = await fs.readFile("data/userData.json")
    res.type("json")
    res.send(data)
})

router.post('/users', async (req, res) => {
    console.log(req.body)

    await fs.writeFile(
        "data/userData.json",
        JSON.stringify(req.body)
    )
    res.send("success")
})

export default router;