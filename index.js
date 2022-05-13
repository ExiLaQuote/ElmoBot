const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]})
const stayingAlive = require("./server")
const token = process.env['TOKEN']
let i=0;

client.on("messageCreate", msg => {
  const elmoList = [`${msg.author}, Elmo loves you!`, "Elmo hates Rocco!!", "You're amazing! Elmo is just meh. . .", "Elmo is moving to Alaska.", "Oh look, it’s Mr. Noodle’s brother, Mr. Noodle.", "Elmo’s fur is furry, alright."]
  if (i < elmoList.length){
    if(!msg.author.bot){
      if (msg.content.match(/elmo/ig)){
        msg.reply(`${elmoList[i]}`)}
      else if (msg.content.match(/HAHAH/gi)){
        msg.channel.send(`${elmoList[i]}`)}
      i++;
    }
  }
  if (i == elmoList.length){
    i++;
    setTimeout(() => {
      if (!msg.author.bot){
        if (msg.content.match(/^[a-z]/i)){
          msg.channel.send(`Do you want to be friends with Elmo, ${msg.author}?`);}}
    }, 3000);
  }
  if (i > elmoList.length){
    if(!msg.author.bot){
      if (msg.content.match(/\bye/ig)){
        msg.channel.send("Elmo is happy!"); i=0;}
      else if (msg.content.match(/\bno\b/ig)){
        msg.reply("OK, Elmo is really sleepy. Nap time! *Zzzz*"); i=0;}
    }
  }
});

stayingAlive()
client.login(token)