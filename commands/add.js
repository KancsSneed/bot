const Discord = require("discord.js");

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)

module.exports.run = async (client, message, args) => {
    const perso = args.join(' ');
    message.delete().catch(O_o => {});
    const dbUser = db.get(message.guild.id).find({id: message.author.id}).value()
    if (dbUser !== undefined){
        message.channel.send('Sua ficha já foi criada!')
    }else{
    db.get(message.guild.id).push({
        id: message.author.id,
        usuario: message.author.username,
        personagem: perso,
        vida: 00,
        mana: 00,
        xp: 00,
        vidaFull: 20,
        manaFull: 50,
        xpFull: 100
    }).write()
}};