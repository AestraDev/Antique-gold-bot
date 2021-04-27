/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const { MessageEmbed } = require('discord.js')

module.exports = {

  name: "use",

  description: "Use item that you have purchased",

  category: "Economy",

  cooldown: 1000,


  run: async (client, message, args) => {

    if (args[0] === "lottery") {
      if (!args[1]) {
        
        let user = message.author;

        let dblottery = client.db.fetch(`lottery_${message.guild.id}_${user.id}`)

        if(dblottery === 0) {
          let embed = new MessageEmbed()
            .setTitle("Error")
            .setColor("RED")
            .setDescription("You don't have any lottery token\n\n To buy use `a!buy lottery`")

            return message.channel.send(embed)
        }

        let money = client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`)

        let alottery = Math.floor(Math.random() * 100) + 1;

        let blottery = Math.floor(Math.random() * 30) + 1;

        let clottery = Math.floor(Math.random() * 200)

        const pick = [
          `${alottery}`,
          `${clottery}`
        ]

        const rpick = pick[Math.floor(Math.random() * pick.length)];

        let random = rpick * blottery

        await client.db.subtract(`lottery_${message.guild.id}_${user.id}`, 1)

        await client.db.add(`money_${message.guild.id}_${user.id}.pocket`, random)

        let slottery = new MessageEmbed()
          .setTitle(`Result of ${user.username}`)
          .setColor("GREEN")
          .setDescription(`Used a lottery and won \`${random}\``)

          message.channel.send(slottery)
        
      }
    } else {
      let aembed = new MessageEmbed()
    message.reply("**Please type along with the item name you wanna use**")
    }
  }
}