const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Get bot ping.',
    execute: async (client, message, args) => {
    // Ping Pong ヾ(〃^∇^)ﾉ
    const embed = new Discord.RichEmbed()
    .setDescription(`**Pong!** - Ping: \`${Math.round(client.ping)}ms\``)
    .setColor('#36393F')
    return message.channel.send(embed);

}
}