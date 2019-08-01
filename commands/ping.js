const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    // Ping Pong ヾ(〃^∇^)ﾉ
    const embed = new Discord.MessageEmbed()
    .setDescription(`**Pong!** - Ping: \`${Math.round(client.ping)}ms\``)
    .setColor('#36393F')
    return message.channel.send(embed);

}