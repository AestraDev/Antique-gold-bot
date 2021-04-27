/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "announce",
	cooldown : 18000,
  aliases: ["announce", "a"],
	uimage: 'https://media.discordapp.net/attachments/803290746496221264/803487643895595028/unknown.png',
  category: "Server",
  usage: "`a!announce <text to say>`",
  description: "Returns provided text in Embed form.",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGE"))
      return message.channel.send(`YOU DO NOT HAVE PERMISSION FRIEND`);
    
    let say = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!say)
      return message.channel.send(`❌ | ` + "I Cannot Repeat Blank Message");
    let embed = new MessageEmbed().setDescription(`${say}`).setColor("RANDOM");

    message.channel.send(embed);
  }
};
