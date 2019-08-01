const config = require('../../config.json');
const { RichEmbed } = require('discord.js');
const Pagination = require('discord-paginationembed');
const embeds = [];

for (let i = 0; i < 5; ++i)
  embeds.push(new RichEmbed().addField('Page', i + 1));

module.exports = {
    name: 'newhelp',
    description: 'Bot help.',
    execute: async (client, message, args) => {
        const myImage = message.author.displayAvatarURL;

        new Pagination.Embeds()
          .setArray(embeds)
          .setAuthorizedUsers([message.author.id])
          .setChannel(message.channel)
          .setPageIndicator(true)
          .setPage(3)
           // Methods below are for customising all embeds
          .setImage(myImage)
          .setThumbnail(myImage)
          .setTitle('Test Title')
          .setDescription('Test Description')
          .setFooter('Test Footer Text')
          .setURL(myImage)
          .setColor(0xFF00AE)
          .addBlankField()
          .addField('Test Field 1', 'Test Field 1', true)
          .addField('Test Field 2', 'Test Field 2', true)
          .build();
}
}