const express = require('express') 
const bodyParse = require('body-parser')
const  posts  = require('../model/posts')
const router = express.Router()

router.get("/all", (req,res )=>{

    res.json(JSON.stringify(posts.getAll()))

})

router.post("/new",bodyParse.json() ,(req, res)=>{


let title = req.body.title;
let description = req.body.description;

posts.newPost(title, description)

res.send("post adicionado")

})

module.exports = router
