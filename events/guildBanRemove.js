const {client} = require('../app');
//when user is unbanned
client.on('guildBanRemove', (guild, user) => {
    guild.channels.get(general).send(`${user} was just unbanned! :grinning:`);
    //console.log(`${user} was just unbanned from ${guild.name}`);
  });