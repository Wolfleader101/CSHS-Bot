const fetch = require('node-fetch');

module.exports = {
    name: 'getall',
    execute(message, args) {
            let res = message.guild.members;

            // array to store users
            let Users = [];
    
            res.forEach(el => {
                let username = el.user.username;
                let tag = `#${el.user.discriminator}`;
    
    
                // Use this variable for getting the user in a format like WOLFLEADER#0999
                let User = username + tag;
    
                // add each user to the array when looping
                Users.push(User);
    
    
            });
            
            //example of what to do with the users
            message.channel.send(Users);
    
            const data = {Users};
            // replace this with your own URL
            fetch('http://localhost:3302/PostUser', {
                    method: 'post',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                .then(res => console.log(res))
                // .then(json => console.log(json));
    }
};