/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require("discord.js");

const ms = require("ms");

module.exports = {

  name: "deposit",

  description: "Deposit your economy currency to economy bank.",

  cooldown: 1,

  aliases: ["dp"],

  category: "economy",

  run: async (client, message, args) => {

  let user = message.author;

  let member = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`)

  if (args[0] == 'all') {
    let money = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`)

    let embedbank = new MessageEmbed()
    .setColor('#FFFFFF')
    .setDescription("You don't have any money to deposit. Use a!daily or a!work.")

    if(money === 0 || money === null) return message.channel.send(embedbank)

    await client.db.add(`money_${message.guild.id}_${user.id}.bank`, money)
    await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, money)
    let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You have deposited ${args[0]} coins into your bank`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You can't deposit negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You don't have that much money`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You have deposited ${parseInt(args[0])} money into your bank`);

  await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, parseInt(args[0]));
  await client.db.add(`money_${message.guild.id}_${user.id}.bank`, parseInt(args[0]));
  

  message.channel.send(embed5);
  
  
		}
	}
}