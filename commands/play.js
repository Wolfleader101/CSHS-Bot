const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    execute(message, args) {
      //play music
      let voiceChan = message.member.voice.channel;
      voiceChan.join()
      .then(connection => {
        message.channel.send('Playing: ' + args[0]).catch(error => message.channel.send(error));
      connection.play(ytdl(args[0], { quality: 'highestaudio' }))
      console.log(`${message.tag} ` + args[0]);

    });
    },
};
