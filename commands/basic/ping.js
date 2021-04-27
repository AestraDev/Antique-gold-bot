/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const discord = require('discord.js')
module.exports = {
    name: "ping",
    cooldown: 6000,
    aliases: ["pong"],
    category: "Utility",
		uimage:'https://media.discordapp.net/attachments/803290746496221264/803498160005054534/unknown.png',
    usage: "`a!ping`",
    description: "Get the bot's ping!",
    run: async (client, message, args) => {

     let start = Date.now();

  message.channel.send({embed: {description: "Looks like the bot is slow.", color: "RANDOM"}}).then(m => {

    let end = Date.now();

    let embed = new discord.MessageEmbed()
    .setAuthor("Ping!", message.author.avatarURL())
    .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
    .addField("Message Latency", end - start + "ms", true)
    .setColor("RANDOM");
    m.edit(embed).catch(e => message.channel.send(e))

  })

    }
};