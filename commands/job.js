module.exports = {
    name: 'job',
    description: "job reaction roles",
    async execute(client) {

        const channel = '866734039176183848';

        const brewer = '866739165961912340';
        const farmer = '866739165961912340';
        const miner = '866739054888615937';
        const blacksmith = '866739110085001217';
        const mapper = '866739165961912340';
        const journalist = '866739165961912340';
        const fisher = '866739165961912340';
        const cheese = '866739165961912340';
        const beekeeper = '866739165961912340';
        const postman = '866739165961912340';
        const lumberjack = '866739165961912340';
        const alchemist = '866739165961912340';
        const gardener = '866739165961912340';

        const brewerEmoji = '🍺';
        const farmerEmoji = '🐄';
        const minerEmoji = '⛏️';
        const blacksmithEmoji = '⚒️';
        const mapperEmoji = '🗺️';
        const journalistEmoji = '📖';
        const fisherEmoji = '🎣';
        const cheeseEmoji = '🧀';
        const beekeeperEmoji = '🐝';
        const postmanEmoji = '💌';
        const lumberjackEmoji = '🪓';
        const alchemistEmoji = '🍾';
        const gardenerEmoji = '🥬';



        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == channel){
                
                let userId = await reaction.message.guild.members.cache.get(user.id);

                userId.roles.remove(brewer);
                userId.roles.remove(farmer);
                userId.roles.remove(miner);
                userId.roles.remove(blacksmith);
                userId.roles.remove(mapper);
                userId.roles.remove(journalist);
                userId.roles.remove(fisher);
                userId.roles.remove(cheese);
                userId.roles.remove(beekeeper);
                userId.roles.remove(postman);
                userId.roles.remove(lumberjack);
                userId.roles.remove(alchemist);
                userId.roles.remove(gardener);

                switch(reaction.emoji.name){
                    case brewerEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(brewer);
                    break;
                    case farmerEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(farmer);
                    break;
                    case minerEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(miner);
                    break;
                    case blacksmithEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(blacksmith);
                    break;
                    case mapperEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(mapper);
                    break;
                    case journalistEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(journalist);
                    break;
                    case fisherEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(fisher);
                    break;
                    case cheeseEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(cheese);
                    break;
                    case beekeeperEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(beekeeper);
                    break;
                    case postmanEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(postman);
                    break;
                    case lumberjackEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(lumberjack);
                    break;
                    case alchemistEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(alchemist);
                    break;
                    case gardenerEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.add(gardener);
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

            if(reaction.message.channel.id == channel){

                switch(reaction.emoji.name){
                    case brewerEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(brewer);
                    break;
                    case farmerEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(farmer);
                    break;
                    case minerEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(miner);
                    break;
                    case blacksmithEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(blacksmith);
                    break;
                    case mapperEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(mapper);
                    break;
                    case journalistEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(journalist);
                    break;
                    case fisherEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(fisher);
                    break;
                    case cheeseEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(cheese);
                    break;
                    case beekeeperEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(beekeeper);
                    break;
                    case postmanEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(postman);
                    break;
                    case lumberjackEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(lumberjack);
                    break;
                    case alchemistEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(alchemist);
                    break;
                    case gardenerEmoji:
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(gardener);
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