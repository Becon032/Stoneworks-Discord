module.exports = {
    name: 'ign',
    description: "in game name command",
    execute(message, args){

        let karl = message.guild.roles.cache.find(r => r.name === "Karl");

        if(message.member.roles.cache.has('866407889866326036')){ //if is foreginer, add karl, remove foreginer
            message.channel.send('your request is positive, adding to karls, removing from foreginer, now go to town selection');
            message.member.roles.add(karl).catch(console.error);
            message.member.roles.remove('866407889866326036').catch(console.error);
        } else {
            message.channel.send('you are not a foreginer to be maded to karl');
        }



    }
}