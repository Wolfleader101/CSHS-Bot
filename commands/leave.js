module.exports = {
    name: 'leave',
    execute(message, args) {

      // check if bot is in a voice chat
      let voiceChan = message.guild.me.voice.channel;

      // check if bot is in a voice chat
      if (!voiceChan || voiceChan.type !== 'voice') {

        message.channel.send('I am not in a voice channel.');

      } else {
        message.channel.send('Leaving...').then(() => {
          voiceChan.leave();
        }).catch(error => console.log(error));

      }
    },
};
