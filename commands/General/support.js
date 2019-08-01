const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
  name: 'support',
  description: 'Bot support.',
  execute: async (client, message, args) => {
    let support = args.join(" ")
    if (!support) {
      return message.channel.send("You didn't specify a text.");
    }
    // Change the main guild to your main guild ID.
    const guild = client.guilds.get(config.mainguild);
    // Change the channel ID to a existing channel of the guild id^ so the messages can send to the suggestion channel.
    const channel = guild.channels.get(config.supportchannel);
    const embed = new Discord.RichEmbed()
      .setTitle("📥 New Support Ticket")
      .setDescription(support)
      .setColor('#36393F')
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setFooter(`User ID: ${message.author.id}`);
    await channel.send({ embed });
    return message.channel.send(`Your support ticket has been successfully submitted to the developer.`);
}
}