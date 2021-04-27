/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require("discord.js");

module.exports = {
  name: "avatar",
	cooldown: 10000,
  description: "avatar !",
  aliases: ["av", "avatar"],
	usage:"`a!avatar @user`",
  run: async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    if (!user) return;

    const embed = new Discord.MessageEmbed() 
    .setTitle(`${user.username}'s Avatar!`)
    .setColor('#7289DA')
    .setImage(user.displayAvatarURL({ dynamic: true, size: 4096}))
    message.channel.send(embed);

  }

};