import fetch from 'node-fetch'
import parser from 'node-html-parser'
import { promises as fs } from 'fs'
import express from 'express'
const app = express()

app.get("/", async (req, res) => {
    console.log("got a request for /")
    res.type('html')
    let fileContents = await fs.readFile("index.html")
    res.send(fileContents)
})

app.get("/style.css", async (req, res) => {
    console.log("got a request for style.css")
    res.type("css")
    let fileContents = await fs.readFile("style.css")
    res.send(fileContents)
})

app.get("/index.js", async (req, res) => {
    console.log("got a request for index.js")
    res.type("js")
    let fileContents = await fs.readFile("index.js")
    res.send(fileContents)
})

app.get("/favicon.ico", async (req, res) => {
    console.log("got a request for /favicon.ico")
    res.type("png")
    let fileContents = await fs.readFile("favicon.ico")
    res.send(fileContents)
})


app.get("/api/auditurl", async (req, res) => {
    const inputUrl = req.query.url
    const response = await fetch(inputUrl)
    const pageText = await response.text()

    const htmlPage = parser.parse(pageText)
    const imgTags = htmlPage.querySelectorAll("img")

    let htmlReturn = ""

    for(let i = 0; i < imgTags.length; i++){
        const imgTag = imgTags[i]

        htmlReturn += "<h3>Image " + i + " info:</h3>"
        htmlReturn += "alt text: " + imgTag.attributes.alt + "<br>"
        htmlReturn += "img src: " + imgTag.attributes.src + "<br>"
        htmlReturn += "<img src='" + inputUrl + imgTag.attributes.src +  "' />"
    }

    
    res.type("txt")
    res.send(htmlReturn)
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})