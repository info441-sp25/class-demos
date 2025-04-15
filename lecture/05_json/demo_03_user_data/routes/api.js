import {promises as fs} from 'fs'
import express from 'express'
const router = express.Router();

router.get('/getPterosaurs', async (req, res) => {
    const data = await fs.readFile("data/pterosaur.json")
    const pterosaurInfo = JSON.parse(data)

    let filteredPterosaurInfo = 
        pterosaurInfo.filter(item => {
            if(item.img != ""){
                return true // keep
            } else{
                return false // remove
            }
        })

    res.json(filteredPterosaurInfo)
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