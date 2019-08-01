const config = require('../../config.json');
const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'reminder',
    description: 'set a reminder.',
    execute: async (client, message, args) => {
      let reminderTime = args[0]; 
        
      if (!reminderTime) {
          const embed = new Discord.RichEmbed()
          .setColor("#36393F")
          .setTitle('Invalid Syntax')
          .setDescription("c!remind [time] [message]`\n\nUse 's' for seconds, 'm' for minutes, 'h' for hours and 'd' for days. If a measurement of time is not specified, the time will be in seconds.");
          
          message.channel.send(embed);
      } 
      
      let reminder = args.slice(1).join(" "); 
      
      if (reminder) {
          const success = new Discord.RichEmbed()
              .setColor("#36393F")
              .setTitle('**SUCCESS:**')
              .setDescription(`I will send you a DM in **${reminderTime}**!`)
              .setTimestamp();
          
          const fail = new Discord.RichEmbed()
          .setColor("#36393F")
              .setTitle('**FAIL:**')
              .setDescription(`I couldn't send you a DM. Please check to see if you have direct messaging enabled.`)
              .setTimestamp();
          
          message.channel.send(success);

          setTimeout(function() {
              let remindEmbed = new Discord.RichEmbed()
              .setColor("#36393F")
                  .addField('Reminder:', `${reminder}`)
                  .setTimestamp();

              message.author.send(remindEmbed)
              .catch(() => message.channel.send(fail));
              
          }, ms(reminderTime));
      }
}
}