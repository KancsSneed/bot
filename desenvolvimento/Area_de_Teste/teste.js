const Discord = require("discord.js");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)

module.exports.run = async (client, message, args) => {
    const hook = new Discord.WebhookClient('793663300999053323', 'QtufY0AgSwIxD2Ese6gfavxh2A-CXg7QN9z-amLxTdvdpQk_k6xFWOuBRvuKgwsiAN-V');
    const person_db = db.get(message.guild.id).find({id: message.author.id}).value()
    // Send a message using the webhook;
    hook.send({
        "username": "Astolfo",
        "avatar_url": "",
        "content": "",
        "embeds": [
          {
            "title": "Status",
            "color": 255255,
            "description": `Usuário: ${person_db.usuario}\nPersonagem: ${person_db.personagem}\nVida:${person_db.vida}|${person_db.vidaFull}\nMana: ${person_db.mana}|${person_db.manaFull}\nXp: ${person_db.xp}|${person_db.xpFull}`,
            "timestamp": "",
            "author": {
              "name": ""
            },
            "image": {},
            "thumbnail": {},
            "footer": {
              "text": ""
            },
            "fields": []
          }
        ]
      });

};

//https://discord.com/api/webhooks/793663300999053323/QtufY0AgSwIxD2Ese6gfavxh2A-CXg7QN9z-amLxTdvdpQk_k6xFWOuBRvuKgwsiAN-V