module.exports = {
    name: 'help',
    execute(message, args) {
      message.channel.send('**Here are a list of commands i can do!**: \n' +
      ' 1. ping \n ' +
      '2.play command \n' +
      '3.join and leave command \n' +
      '4. message to #general \n' +
      '5. server info command \n' +
      '6. give yourself roles!'
      );
    },
};
