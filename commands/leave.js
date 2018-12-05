module.exports = {
    name: 'leave',
    execute(message, args) {
      let voiceChan = message.guild.me.voice.channel;
      if (!voiceChan || voiceChan.type !== 'voice') {
        message.channel.send('I am not in a voice channel.');
      } else {
        message.channel.send('Leaving...').then(() => {
          voiceChan.leave();
        }).catch(error => console.log(error));

      }
    },
};
