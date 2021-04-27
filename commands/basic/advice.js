/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();

module.exports = {
  name: "advice",
  cooldown: 5000,
  description: "Get a fresh advice! :D",
	usage:"`a!advice @mention`",
	uimage:'https://media.discordapp.net/attachments/803290746496221264/803488947119587338/unknown.png',
  category: "fun",
  
  run: async (client, message, args) => {
    let data = await random.getAdvice();

    let user = message.author
    if(!message.mentions.users.first()) {
      message.channel.send(`Advice For ${user}`, data)
    } else {
      const user = message.mentions.users.first()
      message.channel.send(`Advice For ${user}`, data)
    }
  }
};
