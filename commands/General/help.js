const config = require('../../config.json');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'help',
    description: 'Bot help.',
    execute: async (client, message, args) => {
    const command = args.join(" ");
    // Sending help message when only writing help.
    if(!args[0]) {
        let embed = new Discord.RichEmbed()
        .setTitle('General Commands')
        .setColor('#36393F')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setImage(config.logo)
        .setDescription([`
        \`${config.prefix}help\` → get help menu.
        \`${config.prefix}info\` → get bot information.
        \`${config.prefix}ping\` → get bot current ping.
        \`${config.prefix}bug\` → submit a bug report.
        \`${config.prefix}suggest\` → send a bot suggestion.
        \`${config.prefix}support\` → create a support ticket.
    `])
        .addField('🎀 Misc Commands', `\`${config.prefix}help misc\``, true)
        .addField('😂 Meme Commands', `\`${config.prefix}help meme\``, true)
        .addField('🔧 Utility Commands', `\`${config.prefix}help nsfw\``, true)
        .addField('🔞 NSFW Commands', `\`${config.prefix}help nsfw\``, true)
        .addField('Prefix Information', `Prefix: \`${config.prefix}\`\nYou can also mention ${client.user} to execute commands.`, false)
        .addField('❯ Useful Links', `[Website](${config.website}) | [Support Server](${config.supporturl}) | [Invite ${client.user.username}](https://discordapp.com/oauth2/authorize/?permissions=2146958847&scope=bot&client_id=${client.user.id}) | [Github](${config.github})`, false)
        return message.channel.send(embed);
    }
    // Sending interactive help menu.
    if(command === 'misc') {
        let embed = new Discord.RichEmbed()
        .setTitle('Help Menu → Misc')
        .setColor('#36393F')
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setDescription([`
        \`${config.prefix}anime\` → search anime on discord.
        \`${config.prefix}anime\` → search manga on discord.
        \`${config.prefix}waifu\` → ~~search~~ waifu on discord.
        \`${config.prefix}moe\` → get random moe's.
        `])
        return message.channel.send(embed);
    }
    // Sending misc help menu.
    if(command === 'meme') {
        let embed = new Discord.RichEmbed()
        .setTitle('Help Menu → Meme')
        .setColor('#36393F')
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setDescription([`
        -- soon --
        `])
        return message.channel.send(embed);
    }
    // Sending misc help menu.
    if(command === 'utility') {
        let embed = new Discord.RichEmbed()
        .setTitle('Help Menu → Utility')
        .setColor('#36393F')
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setDescription([`
        -- soon --
        `])
        return message.channel.send(embed);
    }
    // Sending NSFW help menu.
    if(command === 'nsfw') {
        let embednotnsfw = new Discord.RichEmbed()
        .setTitle('NSFW Error')
        .setDescription('You can only use this in a NSFW channel.')
        .setColor('#363942')

         if(!message.channel === message.channel.nsfw) {
             return message.channel.send(embednotnsfw);
         }

        let embed = new Discord.RichEmbed()
        .setTitle('Help Menu → NSFW')
        .setColor('#36393F')
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setDescription([`
        -- soon --
        `])
        return message.channel.send(embed);
    }
    // Sending owner only help menu.
    if(command === 'owner') {
        // This if statement is to check if the user is owner or not, make sure to put your ID in the config.json.
        if (message.author.id !== `${config.owner}`) {
           return message.channel.send('YoOu\'re NoT mY DeVelOpEr!1?!');
        }

        let embed = new Discord.RichEmbed()
        .setTitle('Help Menu → Owner')
        .setColor('#36393F')
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setDescription([`
        \`${config.prefix}eval\` → evaluate stuff.
        `])
        return message.channel.send(embed);
    }
}
}