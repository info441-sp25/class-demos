import menusDessertsRouter from './menus_desserts.js'
import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send("this is a menu")
})

router.use('/desserts', menusDessertsRouter)


export default router;