const {client} = require('../app');
//when member joins server
client.on('guildMemberAdd', member => {
    let guild = member.guild;
    let general =  guild.channels.find(`general`)
    guild.channels.get(general).send(`Welcome, ${member.user} to ${guild.name}!`);
  });