const {client} = require('../app');
//when member leaves server
client.on('guildMemberRemove', member => {
    let guild = member.guild;
    let general =  guild.channels.find(`general`)
    guild.channels.get(general).send(`${member.user} left the server :sob:`);
  });