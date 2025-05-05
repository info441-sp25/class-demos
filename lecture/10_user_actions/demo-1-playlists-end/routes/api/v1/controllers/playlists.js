import express from 'express'
const router = express.Router()

router.get('/', async (req, res) => {
    const userId = req.query.userId

    // find all playlists for the user with that id
    let userPlaylists = await req.models.Playlist.find({user: userId})

    res.json(userPlaylists)
})

router.post('/', async (req, res) => {
    const title = req.body.title
    const songs = req.body.songs
    const userId = req.body.userId

    let newPlaylist = new req.models.Playlist({
        title: title,
        songs: songs,
        user: userId
    })

    await newPlaylist.save()

    res.json({status: "success"})
    //TODO: catch errors
})

export default router