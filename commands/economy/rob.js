/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const { MessageEmbed } = require("discord.js");

const ms = require("ms");

const match = require("../../ecofunc.js")

module.exports = {

  name: "rob",

  description: "Rob someone and steal their money",

  cooldown: 1,

  category: "economy",

  run: async (client, message, args) => {
    let user =
    message.mentions.users.first() ||
    client.users.cache.get(args[0]) ||
    match(args.join(" ").toLowerCase(), message.guild);

  let targetuser = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`);
  let author     = await client.db.fetch(`rob_${message.guild.id}_${message.author.id}`);
  let author2    = await client.db.fetch(`money_${message.guild.id}_${message.author.id}.pocket`);

  let timeout = 30000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    
  let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Too much rob might get you caught!\n\nRob again in ${time.seconds}s `);
    message.channel.send({ embeds: [timeEmbed]})

  } else {

    let moneyEmbed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You need atleast 200 dollars to rob`);


  if (author2 < 200) {
    return message.channel.send({ embeds: [moneyEmbed]})
  }

  let moneyEmbed2 = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${user.username} don't have anything that you can rob`);

  if (targetuser <= 0 || targetuser === null) {
    return message.channel.send({ embeds: [moneyEmbed2]})
  }

  let authorembed = new MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`You cannot rob yourself!`);

  if(user.id === message.author.id) {
    return message.channel.send({ embeds: [authorembed]})
  }

  let robber = message.author.username;

  let vip = await client.db.fetch(`bronze_${user.id}`)

  if(vip === true) random = Math.floor(Math.random() * parseInt(targetuser)) + 1;
  if(vip === null) random = Math.floor(Math.random() * 100) + 1;

  let bal = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`);

  let NewBal = bal + random;

  let embed = new MessageEmbed()
    .setTitle(`${robber} Robbed ${user.username}`)
   .setDescription(`You got ${random} dollars\n Now you have total ${NewBal} dollars!`)
   .setColor("RANDOM")

   message.channel.send({ embeds: [embed]})

await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, random);
await client.db.add(`money_${message.guild.id}_${message.author.id}.pocket`, random);
await client.db.set(`rob_${message.guild.id}_${message.author.id}`, Date.now());
  }
  }
}