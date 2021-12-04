/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require("discord.js")

module.exports = {
  name: "nick",
	cooldown: 10000,
  aliases: ["setnick", "setnickname", "nickname"],
  category: "moderation",
  description: "Change nickname of anyone",
  run: async (client, message, args) => {
    
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
    let embed = new Discord.MessageEmbed()
    .setDescription("You don't have enough powers")
    .setColor("RANDOM")
    return message.channel.send({embeds: [embed]});
  }
    
    if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {
      let cembed = new Discord.MessageEmbed()
      .setDescription("I don't have enough powers")
      .setColor("RED")
      return message.channel.send(cembed)
    };
  
 let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]).user || message.author
    
  if (!user){
    let eembed = new Discord.MessageEmbed()
    .setDescription("You need to mention the user first")
    .setColor("RED")
    return message.channel.send(eembed)
  }
  
  let nick = args.slice(1).join(" ")
  
  if (!nick){
    let membed = new Discord.MessageEmbed()
    .setDescription("Please give the nick you want to have")
    .setColor("RED")
    return message.channel.send(membed)
  }
  
  let member = message.guild.members.cache.get(user.id);
    
  let embed = new Discord.MessageEmbed()
  .setDescription(`Successfully changed **${user.tag}** nickname to **${nick}**`)
  .setColor("GREEN")
  message.channel.send({embeds: [embed]});;
    
  await member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RED", description: `Error: ${err}`}}))
    
  }
}