module.exports = {
    name: 'accept',
    description: "commant for giving dyplomat and citizen status",
    execute(message, arg, Discord, client){

        const citizenshipChannel = '866409707497455676';
        const diplomatChannel = '868122687602561055';

        const karl = '866395351710826526';
        const foreginer = '866407889866326036';
        const diplomat = '868122823800004648';
        const civilian = '868129195602108446';
        const notInjarldom = '867133848041947148';


        if(message.member.roles.cache.has('866395351710826526') || message.member.roles.cache.has('866395351710826526')){ //if is in jarl or thane


            let userId = message.mentions.members.first();


            if(message.channel.id === citizenshipChannel){

                message.channel.send('Your request was positive, please go to <#866420466889261057> \n'
                + 'You can also choose your job here <#866734039176183848> \n'
                + 'Or apply for military role here <#866751526277218304>');
                userId.roles.add(karl).catch(console.error);
                userId.roles.add(civilian).catch(console.error);
                userId.roles.add(notInjarldom).catch(console.error);
                userId.roles.remove(foreginer).catch(console.error);

            } else if(message.channel.id === diplomatChannel){
                message.channel.send('Your request was positive');
                userId.roles.add(diplomat).catch(console.error);
                //userId.roles.remove(foreginer).catch(console.error);
                
            } else {
            message.channel.send('Wrong channel to use that command');
            }

            

        } else {
            message.channel.send('You dont have premissions to use that command');
        }



    }
}