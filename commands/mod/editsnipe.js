/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
  
const Discord = require("discord.js");

module.exports = {
    name: "editsnipe",
		cooldown:1000,
		usage:"`a!snipe`",
		description:"Get the last edited message",
    aliases: ["es"],
run: async (client, message, args) =>{
  
  const msg = client.snipeedit.get(message.channel.id)
    if(!msg) return message.channel.send("There are no edited messages in this channel!")
    const embed = new Discord.MessageEmbed()
		.setTitle("edited message")
    .setAuthor(msg.author)
    .setDescription(msg.content)
		.setColor("RANDOM")
		.setThumbnail(client.user.displayAvatarURL())
    .setFooter('© Antique Gold', 'https://cdn.discordapp.com/avatars/781557752111431690/da9c119b6283ea7e11db3594bf8c5327.webp?size=4096')
    .setTimestamp()
		if(msg.image)embed.setImage(msg.image)
    
    message.channel.send(embed)
  
  }
}