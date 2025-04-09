import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send("This is the desserts section")
})

router.get('/1', (req, res) => {
    res.send("Chocolate Cake")
})

export default router