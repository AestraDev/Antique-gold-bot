/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  	
const DIG = require("discord-image-generation");
const Discord = require("discord.js");
const clear = require('clear');
module.exports = {
 
    name: 'Slap',
		cooldown: 10000,
    description: 'slap a User!',
    aliases: ["slap"],
    usage: '`a!slap @user1 @user2`',
    accessableby: "",
 
    run: async (client, message, args) => {
        //   const m = client.findMember(message, args, true);
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase()) || message.member;
 
        let avatar = user.user.displayAvatarURL({
            dynamic: false,
            format: "png",
 
        });
 
 
        let user2 = await message.mentions.members.last() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[1].toLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[1].toLocaleLowerCase())
 
        let avatar2 = user2.user.displayAvatarURL({
            dynamic: false,
            format: "png",
        });
 
        if (message.mentions.users.size === 1) {
            return message.channel.send("error `a!slap @user1 @user2`")
        }
        let m = await message.channel.send("**Please Wait...**");
        let img = await new DIG.Batslap().getImage(avatar, avatar2);
 
        let attach = new Discord.MessageAttachment(img, "Slap.png");
        m.delete({
            timeout: 5000
        });
        message.channel.send(attach);
    },
};
clear();