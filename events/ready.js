const Discord = require('discord.js');

module.exports = (client) => {
    console.log(`[Chika] Chika is ready in ${client.guilds.size} server(s).`);
    console.log(`[Chika] Playing with ${client.users.size} users.`);
    console.log(`[Chika] Chika Invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
    client.user.setActivity("@ChikaDev help", {
      type: "STREAMING",
      url: "https://www.twitch.tv/etcroot"
    });
  }