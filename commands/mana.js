const Discord = require("discord.js");

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter)


module.exports.run = async (client, message, args) => {
    const perso = db.get(message.guild.id).find({id: message.author.id}).value()
    const update = args.join(' ');
    
    message.delete().catch(O_o => {});
    if (perso !== undefined){
        db.get(message.guild.id).find({id: message.author.id}).assign({mana: parseInt(update)}).write()
    }else{
        message.channel.send('Sua ficha ainda não foi criada')
    }
};