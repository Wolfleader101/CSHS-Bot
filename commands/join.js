const ytdl = require('ytdl-core');
module.exports = {
    name: 'join',
    execute(message, args) {

      // Get the users voice channel
      let voiceChan = message.member.voice.channel;

      // Check to see if user is in a voice channel
      if (!voiceChan || voiceChan.type !== 'voice') {
        message.channel.send(`${message.author} You need to join a voice channel`).catch(error => message.channel.send(error));

      } else if (message.guild.voiceConnection) {

        message.channel.send('I\'m already in a voice channel');

      } else {

        message.channel.send('Joining...').then(() => {

          //join
          voiceChan.join()
          .then(connection => {
            message.channel.send('Joined successfully.').catch(error => message.channel.send(error));

          }).catch(error => console.log(error));

        }).catch(error => console.log(error));

      }
    },
};
