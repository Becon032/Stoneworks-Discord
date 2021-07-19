module.exports = {
    name: 'military',
    description: "military reaction roles",
    async execute(client) {

        const selectChannel = '866751526277218304';
        const recruitChannel ='866784449853259776';

        const recruit = '866784910147977216';

        const armyEmoji = '⚔️';
        const dragoonEmoji = '🏇';
        const guardEmoji = '🛡️';

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == selectChannel){
                switch(reaction.emoji.name){
                    case armyEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(recruit);
                        client.channels.cache.get(recruitChannel).send('there is a new army recruit named :');
                        break;
                    case dragoonEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(recruit);
                        client.channels.cache.get(recruitChannel).send('there is a new dragoon recruit named :');
                        break;
                    case guardEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(recruit);
                        client.channels.cache.get(recruitChannel).send('there is a new guard recruit named :');
                        break;
                    default:
                        console.error("there is no emoji like that in jobs");
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

            if(reaction.message.channel.id == selectChannel){

                switch(reaction.emoji.name){
                    case armyEmoji:
                    case dragoonEmoji:
                    case guardEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(recruit);
                        break;
                    default:
                        console.error("there is no emoji like that in jobs");
                }

            } else {
                return;
            }
        });



    }
}
