const config = require("../../config.json");
const fs = require("fs")

module.exports = {
  name: 'prefix',
  description: 'Set bot prefix.',
  execute: async (client, message, args) => {
  // This is like prefix for like global like servers... Will work on server prefixes later (￣。￣)～ｚｚｚ
if(message.author.id !== config.owner) return;
if(message.content.startsWith(config.prefix + "prefix")) {
    // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    // change the configuration in memory
    config.prefix = newPrefix;
    message.channel.send(`Prefix has been updated to ${newPrefix}`).catch(console.error);
  
    // Now we have to save the file.
    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
}
}