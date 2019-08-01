const config = require('../config.json');
const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    // They're adorable ಥ_ಥ
    randomPuppy('awwnime')
    .then(url => {
        const embed = new Discord.MessageEmbed()
        .setImage(url)
        .setColor('#36393F')
     return message.channel.send({ embed });
})
}