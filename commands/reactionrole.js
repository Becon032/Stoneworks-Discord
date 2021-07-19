module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message",
    async execute(message, arg, Discord, client) {
        const channel = '866420466889261057';
        const uricil = message.guild.roles.cache.find(role => role.name === "Uricil");
        const steinborg = message.guild.roles.cache.find(role => role.name === "Steinborg");

        const uricilEmoji = '🌵';
        const steinborgEmoji = '🏔️';

        let embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose a province you want to live in')
        .setDescription('Choosing a province will allow you to contact jarl, who can add you to one of the cities!\n\n'
            + `${uricilEmoji} for a Uricil province\n`
            + `${steinborgEmoji} for a Steinborg province\n`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(uricilEmoji);
        messageEmbed.react(steinborgEmoji);


        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name == uricilEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(uricil);
                }
                if(reaction.emoji.name == steinborgEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(steinborg);
                }
            } else {
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                if(reaction.emoji.name == uricilEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(uricil);
                }
                if(reaction.emoji.name == steinborgEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(steinborg);
                }
            } else {
                return;
            }
        });
    }
}