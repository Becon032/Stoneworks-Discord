module.exports = {
    name: 'military',
    description: "military reaction roles",
    async execute(Discord, client) {

        const selectChannel = '866751526277218304';
        const botCommunicationChannel ='866784449853259776';

        const applicant = '866784910147977216';
        const civilian = '868129195602108446';

        const armyEmoji = '⚔️';
        const dragoonEmoji = '🏇';
        const guardEmoji = '🛡️';

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == selectChannel && reaction.message.guild.member(user).roles.cache.has(civilian)){

                let userId = await reaction.message.guild.members.cache.get(user.id);
                let militaryTypeName;

                switch(reaction.emoji.name){
                    case armyEmoji:
                        userId.roles.add(applicant).catch(console.error);
                        userId.roles.remove(civilian).catch(console.error);
                        militaryTypeName = "Himthitki"
                        tagString = "<@256762652565569536>"
                        //            becon
                        break;
                    case dragoonEmoji:
                        userId.roles.add(applicant).catch(console.error);
                        userId.roles.remove(civilian).catch(console.error);
                        militaryTypeName = "Dragoon cavalry"
                        tagString = "<@256762652565569536>"
                        //            becon
                        break;
                    case guardEmoji:
                        userId.roles.add(applicant).catch(console.error);
                        userId.roles.remove(civilian).catch(console.error);
                        militaryTypeName = "Town guard"
                        tagString = "<@256762652565569536>"
                        //            becon
                        break;
                    default:
                        console.error("there is no emoji like that in military selection");
                        return;
                }

                let embed = new Discord.MessageEmbed()
                    .setColor('#e42643')
                    .setTitle('Military')
                    .setDescription('New applicant for '+ militaryTypeName +' <@' + userId + '>');

                client.channels.cache.get(botCommunicationChannel).send(embed);
                client.channels.cache.get(botCommunicationChannel).send(tagString);
                    
            } else {
                return;
            }
            
        });
    }
}
