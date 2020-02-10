const {client} = require('../app');
//when bot joins server
client.on('guildCreate', guild => {
    let general =  guild.channels.find(`general`)
    guild.channels.get(general).send(`CSHS Bot has joined the server and is ready for action! ${guild.name}`);
  });