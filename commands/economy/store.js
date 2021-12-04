/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const Discord = require('discord.js')

module.exports = {

		name: "store",

		description: "Check the store!",

    aliases: ["shop"],

		category: "Economy",

		cooldown:1000,
	

run: async (client, message, args) => {

    let user = message.author;
    let embed = new Discord.MessageEmbed()
      .setTitle("Antique Shop")

      .setColor("RANDOM")

      .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 4096}))

      .setDescription(
        "To buy an item, Use `a!buy <itemname>`\n\n **Electronics**\nLaptop - `1000`\nPhone - `1000`\n\n**Fashion**\nGold hat - `40000`\nDiamond ring - `200,2000`\nAntique diamond - `50,00,000`\n\n **Useful**\nBug catcher - `100`\nLottery - `300`\nFishing Rod - `50`"
      )
      
      .setFooter(client.user.username, client.user.displayAvatarURL())
    message.channel.send({embeds: [embed]});

	}
}