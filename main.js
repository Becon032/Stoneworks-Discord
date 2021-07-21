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
    client.commands.get('military').execute(Discord, client);
    client.commands.get('city').execute(Discord, client);
    
});

client.on('guildMemberAdd', guildMember => {
    let welcomeRole = '866407889866326036';

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('866311335607795735').send(
        `Welcome <@${guildMember.user.id}> to server! \n\n`
        + 'Be sure to check #rules channel\n'
        + 'If you want to become a citizen, apply in <#866409707497455676>\n'
        + 'If you are a diplomat form another nation, #diplomat\n'
    );
    
})


client.on('message', message => {


    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } else if (command === 'accept' || command === 'Accept' || command === 'accepted' || command === 'Accepted'){
        client.commands.get('accept').execute(message, args, Discord, client);
    }

});


client.login('ODY2MzEwMDg1MzMyNDM0OTQ0.YPQsIw.76TB07Er4I0SWDSgs5C4XYbGBe4');