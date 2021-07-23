module.exports = {
    name: 'clear',
    description: "this is a clear specific number of messages command",
    async execute(message, args){

        //if(message.member.roles.cache.has('')) return message.replay("you have no power here!");
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 99) return message.reply("You can not delete more than 99 messages");
        if(args[0] < 1) return message.reply("You must delete at least one message");


        await message.channel.messages.fetch({limit: ++args[0]}).then(messages =>{
            message.channel.bulkDelete(messages); 
        });

    }
}