const Discord = require('discord.js');
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient("AME TOKEN HERE");

module.exports = {
   
        name: 'respect',
				cooldown: 10000,
        description: 'Editing image and send respect one!',
        aliases: ["respected"],
        usage: '`a!respect @user`',
        accessableby: "",
    run: async (client, message, args) => {
    
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("missionpassed", { url: user.user.displayAvatarURL({ format: "png", size: 2048 }) });
        let attachment = new Discord.MessageAttachment(buffer, "respect.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);

    }
}
