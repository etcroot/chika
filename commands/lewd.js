const config = require('../config.json');
const Discord = require('discord.js');
const { lewd } = require('../resource/json/actions');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#36393F')
    .setImage(lewd[Math.round(Math.random() * (lewd.length - 1))]);
return message.channel.send('THATS LEWD!!!', { embed: embed });
}