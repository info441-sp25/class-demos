const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.type('html')
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Hello world</h1>
            </body>
        </html>
        `)
})

app.get("/style.css", (req, res) => {
    res.type("css")
    res.send(`
        h1{color:red}
        body{background-color:lightyellow}
    `)
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})