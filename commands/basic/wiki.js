/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
  name: "wiki",
  cooldown: 8000,
  category: "info", 
  uimage:'https://media.discordapp.net/attachments/803290746496221264/803501917371760680/unknown.png',
  usage: "`a!wiki <query>`",
  description: "Returns the article from Wikipedia",
  run: async (client, message, args) => {
    const body = await fetch(

      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(

        args.join(" ")

      )}`

    ).then(res => res.json().catch(() => {}));

    if (!body)

      return message.channel.sendmessage.channel.send({

        embed: {

          color: "RANDOM",

          title: "❌ Error Page Not Found."

        }

      });

    if (body.title && body.title === "Not found.")

      return message.channel.send({

        embed: {

          color: "RANDOM",

          title: "❌ Error Page Not Found."

        }

      });

    const embed = new Discord.MessageEmbed()

      .setTitle(`🌐 ${body.title} `)

      .addField(

        "More Info: ",

        `**[Click Here!](${body.content_urls.desktop.page})**`,

        true

      )

      .setDescription(`** ${body.extract}**`)

      .setColor(`RANDOM`)
			.setFooter(`© antique-gold`, 'https://cdn.discordapp.com/avatars/781557752111431690/da9c119b6283ea7e11db3594bf8c5327.webp?size=4096')

      .setTimestamp();

    if (body.thumbnail) embed.setThumbnail(body.thumbnail.source);

    message.channel.send({ embeds: [embed]})

  }

};

//Discord Wiki