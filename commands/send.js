module.exports = {
    name: 'send',
    execute(message, args) {
      const general =  message.guild.channels.find(c => c.name === 'general' && c.type === 'text');
      if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
      }
      message.client.channels.get(general.id).send('Message sent from another channel: **' + args[0] + '**');
    },
};
