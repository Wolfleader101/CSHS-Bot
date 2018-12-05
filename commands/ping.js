module.exports = {
    name: 'ping',
    execute(message, args) {
        message.channel.send(`Pong! this took: \`${Date.now() - message.createdTimestamp}ms\` :heart:`);
    },
};
