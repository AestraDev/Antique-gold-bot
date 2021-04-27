/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
    
const { MessageEmbed, Discord } = require("discord.js");

module.exports = {
  name: "poll",
	cooldown:10000,
  category: "Info",
  description: "poll Your Message To Channel",
	uimage:'https://media.discordapp.net/attachments/803290746496221264/803502251074125834/unknown.png',
  usage: "`poll <#channel> <content>`",
  run: async (client, message, args) => {
  
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have premmsions to do that!");

    let sayChannel = message.mentions.channels.first();
    if (!sayChannel) return message.channel.send(`:x:| ${message.author} mention a channel First`)
        let sayMsg = args.slice(1 || 0, args.length).join(" ");
        if (!sayMsg) return message.channel.send(` Say Some Message To Poll`) 
        var role = message.member.highestRole;
        var embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(sayMsg)
            .setAuthor('New Poll', message.guild.iconURL)
            .setFooter('Poll By: ' + `${message.author.username}`)
        .setTimestamp()
        message.channel.send(`Your poll Is Ready On <#${sayChannel.id}>`)
        sayChannel.send({embed}).then(m => {
            m.react('✅');
            m.react('❌');
           }) 
    .catch({});

    }
};
