const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    message.delete().catch(O_o => {});
    message.channel.send(`Servidor: ${message.guild.name} 
    ID do servidor: ${message.guild.id}. 
    Membros: ${message.guild.memberCount} membros!`);
};