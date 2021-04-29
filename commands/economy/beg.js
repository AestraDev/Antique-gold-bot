/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require("discord.js");

const ms = require("ms");

module.exports = {

  name: "beg",

  description: "Beg on the road for some money",

  cooldown: 1,

  aliases: [""],

  category: "economy",

  run: async (client, message, args) => {

  let user = message.author;

  let timeout = 10000;


  let multiplier = await client.db.fetch(`multiplier_${message.guild.id}`);

  if(!multiplier) multiplier = 1;

  let amounta = Math.floor(Math.random() * 100) + 1;

  let amounts = amounta * multiplier;

  let bal = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`);

  let beg = await client.db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));


    let timeEmbed = new MessageEmbed()
    .setColor("#7f89fd")
    .setTitle("Cooldown")
    .setDescription(`You have been warned from officers for continues begging.\nYou can beg again in \`${time.seconds}s\``);
    message.channel.send(timeEmbed)
  } else {
			let replies = [
				'Alan',
				'Steve',
				'Notch',
				'James',
				'Sophia',
				'Sapro',
				'Losive',
				'Harry',
				'Ron'
			];
      let result = Math.floor(Math.random() * replies.length);
  await client.db.add(`money_${message.guild.id}_${user.id}.pocket`, amounts);
  await client.db.set(`beg_${message.guild.id}_${user.id}`, Date.now());

  let NewBal = bal + amounts
  
   message.channel.send(`**${replies[result]}** :  **${user}** Take **${amounts}** antique coins :smile: `)
  

		}
	}
}