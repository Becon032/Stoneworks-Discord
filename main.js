const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('im alive!');

    client.commands.get('job').execute(client);
    client.commands.get('military').execute(client);
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Foreginer');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('866311335607795735').send(`Welcome <@${guildMember.user.id}> to server! go to citizen ship and apply (use !ign for now) `);
})


client.on('message', message => {


    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'city'){
        client.commands.get('city').execute(message, args);
    } else if (command === 'ign'){
        client.commands.get('ign').execute(message, args);
    } else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }

});


client.login('ODY2MzEwMDg1MzMyNDM0OTQ0.YPQsIw.2nLp64SUveWAjU24DPb31m2VXQ4');