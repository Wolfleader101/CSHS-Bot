// CSHS Discord Bot Entry Point!

//discord modules and variables
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');
client.commands = new Discord.Collection();

// other modules
const ddiff = require('return-deep-diff');
const broadcast = client.createVoiceBroadcast();
const ytdl = require('ytdl-core');

// grab commands
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


// set new item in collection,
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}



//login
client.login(token);

client.on('ready', () => {
  console.log('\n================================\n');
  console.log('   --', `\x1b[31m`, `\x1b[4m`,' CSHS Bot Working ', `\x1b[0m`,' --');
  console.log('   --  Status:',`\x1b[32m`,'Online  ', `\x1b[0m`,'   --\n');
  console.log('================================');
  client.user.setActivity('==help for commands', { type: 'STREAMING', url: 'https://www.twitch.tv/shroud'})

});

//catch any errors
process.on('unhandledRejection', err => console.error(`Uncaught Promise Error: \n${err.stack}`));

//if server gets deleted
client.on('guildDelete', guild => {
  let general =  guild.channels.find(`general`)
  console.log(`I have left ${guild.name} at ${new Date()}`);

});

//when bot joins server
client.on('guildCreate', guild => {
  let general =  guild.channels.find(`general`)
  guild.channels.get(general).send(`CSHS Bot has joined the server and is ready for action! ${guild.name}`);
});

//when member joins server
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let general =  guild.channels.find(`general`)
  guild.channels.get(general).send(`Welcome, ${member.user} to ${guild.name}!`);
});

//when member leaves server
client.on('guildMemberRemove', member => {
  let guild = member.guild;
  let general =  guild.channels.find(`general`)
  guild.channels.get(general).send(`${member.user} left the server :sob: :sob:`);
});

// This is not working!

//logs Member update e.g roles
/*client.on('guildMemberUpdate', (oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
});

//guild update very specific e.g changing verification level
client.on('guildUpdate', (oGuild, nGuild) => {
  console.log(ddiff(oGuild, nGuild));
});
*/


//when user is banned
client.on('guildBanAdd', (guild, user) => {
  guild.channels.get(general).send(`${user} was just banned! DON'T BE NAUGHTY :rage:  :rage: `);
  console.log(`${user} was just banned`);
});

//when user is unbanned
client.on('guildBanRemove', (guild, user) => {
  guild.channels.get(general).send(`${user} was just unbanned! YAY!! :heart: :grinning:  `);
  console.log(`${user} was just unbanned`);
});



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
