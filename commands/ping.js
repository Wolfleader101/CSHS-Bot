module.exports = {
    name: 'ping',
    execute(message, args) {
        message.channel.send('Pinging!').then(sent => {
            sent.edit(`Pong! this took: \`${sent.createdTimestamp - message.createdTimestamp}ms\` :heart:`);
        });
    },
};
