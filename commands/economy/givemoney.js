/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require("discord.js");

const ms = require("ms");

module.exports = {

  name: "givemoney",

  description: "Give some antique currency to the mention user",

  cooldown: 5000,

  aliases: ["gift"],

  category: "economy",

  run: async (client, message, args) => {

    let member = message.mentions.users.first()

    let user = message.author;

    if (!args[0] === member) {
      return message.channel.send("Mention a user whom you wanna give money")
  }

  if (member === user) {
      return message.channel.send("You cannot give yourself money")
  }

  if (!args[1]) {
    return message.channel.send("Give me a amount that you want to give")
  }

    await client.db.fetch(`money_${message.guild.id}_${member.id}.pocket`, (args[1]));
    
    await client.db.add(`money_${message.guild.id}_${member.id}.pocket`, (args[1]));

    await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, (args[1]));


    let moneybed = new MessageEmbed()
      .setTitle('Success')
      .setColor('GREEN')
      .setDescription(`**${user.username}** gave **${member.username}** \`${args[1]}\` antique coins`)
     message.channel.send(moneybed)

  }
}
