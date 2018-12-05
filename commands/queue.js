const ytdl = require('ytdl-core');
module.exports = {
  name: 'queue',
  execute(message, args) {

    //queue songs
    const queue = [];
    message.channel.send('Queued: ' + args[0]).catch(error => message.channel.send(error));
    queue.push(args[0])


    const dispatcher = play(ytdl(queue.songs[0], {quality: 'highestaudio'}));
    //play queue
    dispatcher.on("end", () => {
      queue.shift();
      play(ytdl(queue.songs[0], {quality: 'highestaudio'}))
    });

    dispatcher.on("error", error => {
      console.error(error);
    });

  },
};
