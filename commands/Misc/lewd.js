const config = require('../../config.json');
const Discord = require('discord.js');
const { lewd } = require('../../resource/json/actions');

module.exports = {
    name: 'lewd',
    description: 'ew that\'s lewd...',
    execute: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor('#36393F')
    .setImage(lewd[Math.round(Math.random() * (lewd.length - 1))]);
return message.channel.send('THATS LEWD!!!', { embed: embed });
}
}