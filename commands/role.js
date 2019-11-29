module.exports = {
  name: 'role',
  execute(message, args) {
    let role = message.guild.roles.find(role => role.name === args[0])
    if (role === "Teacher") {
      message.channel.send(`Could not add role **${role.name}** for you.`)
  } else {
    
    message.member.roles.add(role);
    message.channel.send(`added the **${role.name}** for you.`)
  }
  },
};
