const {client} = require('../app')

// The startup event
client.on('ready', () => {
    console.log('\n================================\n');
    console.log('   --', `\x1b[31m`, `\x1b[4m`,' CSHS Bot Working ', `\x1b[0m`,' --');
    console.log('   --  Status:',`\x1b[32m`,'Online  ', `\x1b[0m`,'   --\n');
    console.log('================================');
    client.user.setActivity('==help for commands', { type: 'STREAMING', url: 'https://www.twitch.tv/shroud'})
  
  });