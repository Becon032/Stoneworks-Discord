module.exports = {
    name: 'city',
    description: "this allow karls to request adding to the city",
    async execute(Discord, client){

        const selectChannel = '866420466889261057';
        const botCommunicationChannel ='866784449853259776';

        //jarldoms
        const notInjarldom = '867133848041947148';
        const jarldom123 = '867134010375405630';
        const jarldom333 = '867152145169514526';

        //cityemoijis
        const steinborg = '🏔️';
        const uricil = '🌵';
        const city3 = '🛡️';

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == selectChannel && reaction.message.guild.member(user).roles.cache.has(notInjarldom)){

                let userId = await reaction.message.guild.members.cache.get(user.id);
                let cityName;
                let tagString = "";

                switch(reaction.emoji.name){
                    case steinborg:
                        userId.roles.add(jarldom123);
                        userId.roles.remove(notInjarldom);
                        cityName = "Steinborg"
                        jarldomName = "Jarldom123"
                        tagString = "<@256762652565569536>"
                        //            becon
                        break;
                    case uricil:
                        userId.roles.add(jarldom123);
                        userId.roles.remove(notInjarldom);
                        cityName = "Uricil"
                        jarldomName = "Jarldom123"
                        tagString = "<@866411488426852398>"
                        //            randomMinecraftGuy
                        break;
                    case city3:
                        userId.roles.add(jarldom333);
                        userId.roles.remove(notInjarldom);
                        cityName = "City3"
                        jarldomName = "Jarldom333"
                        tagString = "<@866411488426852398>"
                        //            randomMinecraftGuy
                        break;
                    default:
                        console.error("there is no emoji like that for city selection");
                        return;
                }

                let embed = new Discord.MessageEmbed()
                    .setColor('#3498DB')
                    .setTitle(jarldomName + ' citizenship')
                    .setDescription('New citizen in '+ cityName +': <@' + userId + '>.');

                client.channels.cache.get(botCommunicationChannel).send(embed);
                client.channels.cache.get(botCommunicationChannel).send(tagString);
                    
            } else {
                return;
            }
            
        });



        /*

        if(message.member.roles.cache.has('866395351710826526')){
            message.channel.send('your request is processing');
        } else {
            message.channel.send('your citizen ship was not aproved yet, you need to become karl to do that');
            message.channel.send('you have been added to karls');
            message.member.roles.add('866395351710826526').catch(console.error);
        }

        */
    }
}