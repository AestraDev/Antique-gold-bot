/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */

  const { MessageEmbed } = require("discord.js");
  const ms = require("ms");

module.exports = {

  name: "addmoney",
  description: "Add money.",
  cooldown: 1,
  aliases: ["addm"],
  category: "economy",
  run: async (client, message, args) => {

    if (!client.ownerlist.owners.includes(message.author.id)) return;

    if (!args[1]) {
      return message.channel.send("Please Give a Amount To Add")
  }
    const member  = message.mentions.users.first() || message.author;

      await client.db.fetch(`money_${message.guild.id}_${member.id}.pocket`, (args[1]));
    
     await client.db.add(`money_${message.guild.id}_${member.id}.pocket`, (args[1]));

     message.channel.send(`${args[1]} Dollars Added To Account`)

  }
}
