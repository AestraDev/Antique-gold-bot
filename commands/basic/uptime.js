/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "uptime",
	cooldown: 10000,
  category: "info",
	usage:"`a!uptime`",
	uimage:'https://media.discordapp.net/attachments/803290746496221264/803500464200876043/unknown.png',
  description: "Show's the uptime of the bot",
  run: async (client, message, args) => {
    
    
    let days = Math.floor(client.uptime / 86400000);
    let hours = Math.floor(client.uptime / 3600000) % 24;
    let minutes = Math.floor(client.uptime / 60000) % 60;
    let seconds = Math.floor(client.uptime / 1000) % 60;

    let upembed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`My Uptime is **${days}d ${hours}h ${minutes}m ${seconds}s\n**`)
    
    message.channel.send({ embeds: [upembed]})
    
  }
};