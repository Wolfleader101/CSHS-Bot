const {client} = require('../app');

    //when user is banned
    client.on('guildBanAdd', (guild, user) => {
      guild.channels.get(general).send(`${user} was just banned! Next time follow the Rules!`);
    });


