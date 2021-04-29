/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require("discord.js");

const ms = require("ms");

module.exports = {

  name: "daily",

  description: "Get your daily reward",

  cooldown: 1,


  category: "economy",

  run: async (client, message, args) => {

  let user = message.author;

  let timeout = 86400000;

  let daili = Math.floor(Math.random() * 1000) + 1;
  let multiplier = await client.db.fetch(`multiplier_${message.guild.id}`);
  if(!multiplier) multiplier = 1;
  let dailies =  daili * multiplier;

  let daily = await client.db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`You have collected your daily reward\n\nYou can collect again in \`\`${time.hours}h ${time.minutes}m ${time.seconds}\`\``);
    message.channel.send(timeEmbed)
  } else {
    

  
  await client.db.add(`money_${message.guild.id}_${user.id}.pocket`, dailies);
  await client.db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

  message.channel.send(`${user} You got **${dailies}** antique coins of daily reward`)
  

		}
	}
}