module.exports = {
    name: 'city',
    description: "this allow karls to request adding to the city",
    execute(message, args){



        if(message.member.roles.cache.has('866395351710826526')){
            message.channel.send('your request is processing');
        } else {
            message.channel.send('your citizen ship was not aproved yet, you need to become karl to do that');
            message.channel.send('you have been added to karls');
            message.member.roles.add('866395351710826526').catch(console.error);
        }


    }
}