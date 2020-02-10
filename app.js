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

// Handlers
//export client for events
module.exports = {client: client};
// import events
require("./handlers")(client);


//catch any errors
process.on('unhandledRejection', err => console.error(`Uncaught Promise Error: \n${err.stack}`));

//login
client.login(token);