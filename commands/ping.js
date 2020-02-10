module.exports = {
    name: 'ping',
    execute(message, args) {
        message.channel.send(`Pong! this took: \`${message.createdTimestamp - Date.now()}ms\` :heart:`);
    },
};
