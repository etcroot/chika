const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'info',
    description: 'Get bot information.',
    execute: async (client, message, args) => {
// You can change this to whatever you want, i suggest editing it.
let embed = new Discord.RichEmbed()
.setTitle(`${client.user.username} Information`)
.setColor('#36393F')
.setImage(config.logo)
.setDescription(`My prefix is: \`${config.prefix}\`\nYou can also mention me ${client.user} to get prefix info.\nI'm in beta so please be gentle o(╥﹏╥)o`)
.setThumbnail(client.user.displayAvatarURL)
.addField('❯ Developer', `<@${config.owner}>`, true)
.addField('❯ Bot Version', `${config.version}`, true)
.addField('❯ Library', `${config.library}`, true)
.addField('❯ Node', `${config.node}`, true)
.addField('❯ Guild Count', `${client.guilds.size}`, true)
.addField('❯ User Count', `${client.users.size}`, true)
.addField('❯ Channel Count', `${client.channels.size}`, true)
.addField('❯ Emojis Count', `${client.emojis.size}`, true)
.addField('❯ Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
.addField('❯ Useful Links', `[Website](${config.website}) | [Support Server](${config.supporturl}) | [Invite ${client.user.username}](https://discordapp.com/oauth2/authorize/?permissions=2146958847&scope=bot&client_id=${client.user.id}) | [Github](${config.github})`, false)
.setFooter(`${client.user.username} | By: ${config.ownertag}`)
message.channel.send(embed);
}
}