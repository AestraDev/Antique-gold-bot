/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require("discord.js");

const { MessageEmbed } = require("discord.js");

const Color = `RANDOM`;

const Fetch = require("node-fetch"); //Install Node-fetch - npm i node-fetch

module.exports = {

  name: "meme",
  cooldown: 10000,
  category: "fun",

  description: "Send A Meme!",
  uimage:"https://media.discordapp.net/attachments/803290746496221264/803497467831648256/unknown.png?width=361&height=492",
  usage: "`a!meme`",

  run: async (client, message, args) => {

 

    const Reds = ["memes", "me_irl", "dankmemes", "comedyheaven", "Animemes"];

    const Rads = Reds[Math.floor(Math.random() * Reds.length)];

    const res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`);

    const json = await res.json();

    if (!json[0]) return message.channel.send(`Your Life Lmfao`);

    const data = json[0].data.children[0].data;

    const Embed = new MessageEmbed()

      .setColor(Color)

      .setURL(`https://reddit.com${data.permalink}`)

      .setTitle(data.title)

      .setDescription(`Author : ${data.author}`)

      .setImage(data.url)

      .setFooter(

        `${data.ups || 0} 👍 | ${data.downs || 0} 👎 | ${data.num_comments ||

          0} 💬`

      )

      .setTimestamp();

 return message.channel.send({ embeds: [Embed]});
 
  }

};