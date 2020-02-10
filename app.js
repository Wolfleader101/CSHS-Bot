// CSHS Discord Bot Entry Point!

//discord modules and variables
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');
client.commands = new Discord.Collection();

// Voice chat modules
const ddiff = require('return-deep-diff');
const broadcast = client.voice.createBroadcast();
const ytdl = require('ytdl-core');

module.exports = {
  client: client
};

// Handlers
require("./handlers")(client);

//commands
client.on('message', message => {

//stop spam
	if (!message.content.startsWith(prefix) || message.author.bot) return;

  //allow for arguments.
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
      client.commands.get(command).execute(message, args);
  }
  catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
  }

});

//catch any errors
process.on('unhandledRejection', err => console.error(`Uncaught Promise Error: \n${err.stack}`));

//login
client.login(token);