const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./config.json').token;
const ddiff = require('return-deep-diff');
const prefix = require('./config.json').prefix;
const broadcast = client.createVoiceBroadcast();
const ytdl = require('ytdl-core')

client.login(token);
client.on('ready', () => {
  console.log('CSHS Bot Working!! \n \n');
  client.user.setActivity('==help for commands', { type: 'STREAMING', url: 'https://www.twitch.tv/shroud'})

});

//catch any errors
process.on('unhandledRejection', err => console.error(`Uncaught Promise Error: \n${err.stack}`));

//if server gets deleted
client.on('guildDelete', guild => {
  console.log(`I have left ${guild.name} at ${new Date()}`);

});

//when bot joins server
client.on('guildCreate', guild => {
  guild.channels.get('510608258147287053').send(`Police bot has joined the server and is ready for action! ${guild.name}`);
});

//when member joins server
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.channels.get('510608258147287053').send(`Welcome, ${member.user} to Wolf Pack!`);
});

//when member leaves server
client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.channels.get('510608258147287053').send(`${member.user} left the server :sob: :sob:`);
});

//logs Member update e.g roles
client.on('guildMemberUpdate', (oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
});

//guild update very specific e.g changing verification level
client.on('guildUpdate', (oGuild, nGuild) => {
  console.log(ddiff(oGuild, nGuild));
});

//when user is banned
client.on('guildBanAdd', (guild, user) => {
  guild.channels.get('510608258147287053').send(`${user} was just banned! DON'T BE NAUGHTY :rage:  :rage: `);
  console.log(`${user} was just banned`);
});

//when user is unbanned
client.on('guildBanRemove', (guild, user) => {
  guild.channels.get('510608258147287053').send(`${user} was just unbanned! YAY!! :heart: :grinning:  `);
  console.log(`${user} was just unbanned`);
});



//commands
client.on('message', message => {
  let args = message.content.slice(prefix.length).split(/ +/);
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  //join command

  if (message.content.startsWith(prefix + 'play')) {
    let voiceChan = message.member.voice.channel;
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
          //play music
          //connection.play('./music.mp3', { volume: 0.5 })
          connection.play(ytdl(args[1], { quality: 'highestaudio' }))


        }).catch(error => console.log(error));

      }).catch(error => console.log(error));

    }
  } else


    //leave command

    if (message.content.startsWith(prefix + 'leave')) {
      let voiceChan = message.member.voiceChannel;
      if (!voiceChan) {
        message.channel.send('I am not in a voice channel');
      } else {
        message.channel.send('Leaving...').then(() => {
          voiceChan.leave();
        }).catch(error => console.log(error));

      }
    }


  //ping command (test server speed)

  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.send(`pong this took: \`${Date.now() - message.createdTimestamp}ms\` :heart:`);
  } else



    //send command
    if (message.content.startsWith(prefix + 'send')) {
      if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
      }
      client.channels.get('510608258147287053').send('Message sent from another channel: **' + args[1] + '**');
    } else

      // help command
      if (message.content.startsWith(prefix + 'help')) {
        message.channel.send('**Here are a list of commands i can do!**: \n 1. ping \n 2.play command \n 3. message to #general \n 4. server info command');
      }

  //server & user info command
  if (message.content.startsWith(prefix + 'server')) {
    const server = client.guilds.find(guild => guild.name === 'CSHS CTF 2018');
    message.channel.send(`**Server name**: ${message.guild.name}\n **Total members**: ${message.guild.memberCount}`);
  }
});
