const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
  name: 'suggest',
  description: 'Write a suggestion.',
  execute: async (client, message, args) => {
    let suggest = args.join(" ")
    if (!suggest) {
      return message.channel.send("You didn't specify a suggestion.");
    }
    // Change the main guild to your main guild ID.
    const guild = client.guilds.get(config.mainguild);
    // Change the channel ID to a existing channel of the guild id^ so the messages can send to the suggestion channel.
    const channel = guild.channels.get(config.suggestchannel);
    const embed = new Discord.RichEmbed()
      .setTitle("📥 New Suggestion")
      .setDescription(suggest)
      .setColor('#36393F')
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setFooter(`User ID: ${message.author.id}`);
    await channel.send({ embed });
    return message.channel.send(`Your suggestion has been successfully submitted to the developer.`);
}
}