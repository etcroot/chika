const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var search = message.content.split(/\s+/g).slice(1).join(" ");
    if (!search) {
        const embed = new Discord.MessageEmbed()
        .setTitle('The only waifu is Chika.')
        .setImage('https://i.imgur.com/D9gp3rD.png')
        .setColor('#36393F')
     return message.channel.send({ embed });
    } else {
    const embed = new Discord.MessageEmbed()
        .setTitle('The only waifu is Chika.')
        .setImage('https://i.imgur.com/D9gp3rD.png')
        .setColor('#36393F')
     return message.channel.send({ embed });
    }
}