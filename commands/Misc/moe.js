const config = require('../../config.json');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports = {
    name: 'moe',
    description: 'Cute animu girls.',
    execute: async (client, message, args) => {
    // They're adorable ಥ_ಥ
    randomPuppy('awwnime')
    .then(url => {
        const embed = new Discord.RichEmbed()
        .setImage(url)
        .setColor('#36393F')
     return message.channel.send({ embed });
})
}
}