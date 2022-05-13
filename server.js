const express = require("express")
const server = express()

server.all("/", (req, res) => {
  res.send("Bot is running!")
})

function stayingAlive(){
  server.listen(3000, ()=>{
    console.log("I'm staying alive")
  })
}

module.exports = stayingAlive