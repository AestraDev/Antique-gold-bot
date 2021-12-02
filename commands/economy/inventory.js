/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "inventory",

  description: "See yours/mention user inventory",

  cooldown: 1000,

  aliases: ["inv"],

  category: "economy",

  run: async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;

    let laptop = client.db.fetch(`laptop_${message.guild.id}_${user.id}`) ? client.db.fetch(`laptop_${message.guild.id}_${user.id}`): "0";

    let phone = client.db.fetch(`antiquephone_${message.guild.id}_${user.id}`) ? client.db.fetch(`antiquephone_${message.guild.id}_${user.id}`): "0";

    let goldenhat = client.db.fetch(`goldhat_${message.guild.id}_${user.id}`) ? client.db.fetch(`goldhat_${message.guild.id}_${user.id}`): "0";

    let lottery = client.db.fetch(`lottery_${message.guild.id}_${user.id}`) ? client.db.fetch(`lottery_${message.guild.id}_${user.id}`): "0"

    //let sunglasses = client.db.fetch(`sunglasses_${message.guild.id}_${user.id}`) ? client.db.fetch(`sunglasses_${message.guild.id}_${user.id}`): "0"

    let bugcatcher = client.db.fetch(`bugcatcher_${message.guild.id}_${user.id}`) ? client.db.fetch(`bugcatcher_${message.guild.id}_${user.id}.rod`): "0"
    
    let inventory = new MessageEmbed()
      .setTitle(`Inventory Of ${user.username}`)

      .setColor(`RANDOM`)

      .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 4096}))

      .setDescription(`
      **Electronics**\nLaptop - \`${laptop}\`\nPhone - \`${phone}\`\n\n**Fashion**\nGold hat - \`${goldenhat}\`\n\n**Useful**\nBug Catcher - \`${bugcatcher}\`\nLottery - \`${lottery}\``)

      message.channel.send({ embeds: [inventory]})
  }
}