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
        .addField('🎀 Misc', `\`${config.prefix}help misc\``, true)
        .addField('😂 Meme', `\`${config.prefix}help meme\``, true)
        .addField('🔧 Utility', `\`${config.prefix}help nsfw\``, true)
        .addField('🎵 Music', `\`${config.prefix}help music\``, true)
        .addField('🤝 Action', `\`${config.prefix}help actions\``, true)
        .addField('🔨 Moderation', `\`${config.prefix}help moderation\``, true)
        .addBlankField()
        .addField('Prefix Information', `Prefix: \`${config.prefix}\`\nYou can also mention ${client.user} when using any commands except for the music module.`, false)
        .addField('❯ Useful Links', `[Website](${config.website}) | [Support Server](${config.supporturl}) | [Invite ${client.user.username}](https://discordapp.com/oauth2/authorize/?permissions=2146958847&scope=bot&client_id=${client.user.id}) | [Github](${config.github})`, false)
        return message.channel.send(embed);
    }
    // Sending misc help menu.
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
        \`${config.prefix}reminder\` → set a reminder.
        `])
        return message.channel.send(embed);
    }
    // Sending actions help menu.
    if(command === 'actions') {
        let embed = new Discord.RichEmbed()
        .setTitle('Help Menu → Utility')
        .setColor('#36393F')
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setDescription([`
        \`${config.prefix}reminder\` → set a reminder.
        `])
        return message.channel.send(embed);
    }
    // Sending misc help menu.
    if(command === 'moderation') {
        let embed = new Discord.RichEmbed()
        .setTitle('Help Menu → Utility')
        .setColor('#36393F')
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setDescription([`
        \`${config.prefix}reminder\` → set a reminder.
        `])
        return message.channel.send(embed);
    }
    // Sending music help menu.
    if(command === 'music') {
        let embed = new Discord.RichEmbed()
        .setTitle('Help Menu → Music')
        .setColor('#36393F')
        .setFooter(`${client.user.username} | By: ${config.ownertag}`)
        .setDescription([`
        \`${config.prefix}play\` → play music through url or search term.
        \`${config.prefix}pause\` → pause the current audio.
        \`${config.prefix}resume\` → resume the paused audio.
        \`${config.prefix}stop\` → stop the current audio & clear queue.
        \`${config.prefix}skip\` → skip the current audio.
        \`${config.prefix}leave\` → leave the voice channel & clear queue.
        \`${config.prefix}loop\` → loop through the queue.
        \`${config.prefix}queue\` → check the current queue list.
        \`${config.prefix}np\` → check what's currently playing.
        \`${config.prefix}volume\` → set the audio volume.
        \`${config.prefix}remove\` → remove a listing in the queue.
        \`${config.prefix}clear\` → clear the queue.
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