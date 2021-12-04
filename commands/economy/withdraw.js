/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const { MessageEmbed } = require("discord.js");

const ms = require("ms");

module.exports = {

  name: "withdraw",

  description: "Withdraw your economy money from bank",

  cooldown: 1,

  aliases: ["with"],

  category: "economy",

  run: async (client, message, args) => {
    {

  let user = message.author;

  let member = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`)
  
  let member2 = await client.db.fetch(`money_${message.guild.id}_${user.id}.bank`)

  if (args[0] == 'all') {
    let money = await client.db.fetch(`money_${message.guild.id}_${user.id}.bank`)
    
    await client.db.subtract(`money_${message.guild.id}_${user.id}.bank`, money)
    await client.db.add(`money_${message.guild.id}_${user.id}.pocket`, money)
    
    let embed5 = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You have withdrawn ${args[0]} your money from your bank. `);
  message.channel.send({embeds: [embed5]})
  
  } else {

  let embed2 = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Specify an amount to withdraw`);
  
  if (!args[0]) {
      return message.channel.send({embeds: [embed2]})
  }
  let embed3 = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You can't withdraw negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send({embeds: [embed3]})
  }
  let embed4 = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You don't have that much money in the bank`);

  if (member2 < args[0]) {
      return message.channel.send({embeds: [embed4]})
  }

  let embed5 = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You have withdrawn ${args[0]} money from your bank`);

  message.channel.send({embeds: [embed5]})
  await client.db.subtract(`money_${message.guild.id}_${user.id}.bank`, parseInt(args[0]))
  await client.db.add(`money_${message.guild.id}_${user.id}.pocket`, parseInt(args[0]))
		}
	}
  }
}