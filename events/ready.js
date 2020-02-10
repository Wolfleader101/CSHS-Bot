const {client} = require('../app')
const chalk = require('chalk');

// The startup event
client.on('ready', () => {
    console.log('\n================================\n');
    console.log('   --', chalk.red(' CSHS Bot Working  '), '   --');
    console.log('   --  Status:',chalk.green('Online   '), '    --\n');
    console.log('================================');
    client.user.setActivity('==help for commands', { type: 'STREAMING', url: 'https://www.twitch.tv/shroud'})
  
  });