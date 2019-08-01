const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
  name: 'bug',
  description: 'Report a bot bug.',
  execute: async (client, message, args) => {
    let bug = args.join(" ")
    if (!bug) {
      return message.channel.send("You didn't specify a bug.");
    }
    // Change the main guild to your main guild ID.
    const guild = client.guilds.get(config.mainguild);
    // Change the channel ID to a existing channel of the guild id^ so the messages can send to the bug report channel.
    const channel = guild.channels.get(config.bugreportchannel);
    const embed = new Discord.RichEmbed()
      .setTitle("📥 New Bug Report")
      .setDescription(bug)
      .setColor('#36393F')
      .setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setFooter(`User ID: ${message.author.id}`);
    await channel.send({ embed });
    return message.channel.send(`Your bug report has been successfully submitted to the developer.`);
}
}