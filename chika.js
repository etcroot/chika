const { Client, Collection, Discord, RichEmbed } = require('discord.js');
const client = new Client();
const { readdir } = require('fs');
const { prefix, token, guildchannel } = require('./config.json');
const fs = require("fs");
client.commands = new Collection();
client.categories = new Collection();
// Hello and welcome to my bot chika (●´ω｀●)
// She's like the most simple set up bot you'll ever find, i think?
// Feel free to use her, she's very very fun & handy (n˘v˘•)¬
// Star me on github ⭐️

readdir("./events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

 
// Guild Join Event
client.on('guildCreate', guild => {
    let channel = client.channels.get(guildchannel);
    client.user.setActivity(`${prefix}help | ${client.guilds.size} guilds`, { type: 'LISTENING' });
  const embed = new RichEmbed()
  .setColor('#36393F')
  .setAuthor(`Joined ${guild.name}`)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID", guild.id, true)
  .addField("Users", guild.memberCount, true)
  channel.send(embed);
  });

// Guild Leave event
client.on('guildDelete', guild => {
    let channel = client.channels.get(guildchannel);
    client.user.setActivity(`${prefix}help | ${client.guilds.size} guilds`, { type: 'LISTENING' });
  const embed = new RichEmbed()
  .setColor('#36393F')
  .setAuthor(`Left ${guild.name}`)
  .addField("Owner", guild.owner.user.tag)
  .addField("ID", guild.id, true)
  .addField("Users", guild.memberCount, true)
  channel.send(embed);
  });

readdir('./commands', (err, folders) => { 
    if (err) return console.error(err);
    folders.forEach(folder => {
        let cmdNames = [];
        readdir(`./commands/${folder}`, (err, files) => {
            if (err) console.error(err);
            files.forEach(file => {
                if (!file.endsWith(".js")) return;
                    const command = require(`./commands/${folder}/${file}`)
                    command.category = folder;
                    client.commands.set(command.name, command);
                    cmdNames.push(command.name);
            });
        });
        client.categories.set(folder, {
            title: folder,
            commands: cmdNames
        });
    });
});


const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

client.on('message', async message => {
  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);
  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const command = args.shift();
  if (!client.commands.has(command)) return;
  if (!message.content.startsWith(matchedPrefix)) return;
    
    if (message.author.id === client.user.id) return;
    try {
        client.commands.get(command).execute(client, message, args);
        const commandlist = client.commands;
    } catch (error) {
        console.error(error);
        message.reply('sorry there was an error!');
    }
}),

client.login(token);