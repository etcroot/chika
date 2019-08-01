const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

// Hello and welcome to my bot chika (●´ω｀●)
// She's like the most simple set up bot you'll ever find, i think?
// Feel free to use her, she's very very fun & handy (n˘v˘•)¬
// Star me on github ⭐️

// Read event dir
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Prefix, Messages & so on.
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;
    if(message.content.toLowerCase() === `<@${client.user.id}>` || message.content.toLowerCase() === `<@!${client.user.id}>`) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`__Chika's Prefix & Help__`)
    .setDescription([`
    Use \`${config.prefix}help\` to get all my commands.
    Mentioning me works as a prefix too.
    `])
    .setColor('#A65EA5')
    return message.channel.send(embed);
  }

const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(config.prefix)})\\s*`);
if (!prefixRegex.test(message.content)) return;

const [, matchedPrefix] = message.content.match(prefixRegex);
const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  }
});

// Login ≧◡≦
client.login(config.token);