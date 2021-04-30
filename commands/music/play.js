/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
module.exports = {
  name: "play",
  cooldown: 1000,
  aliases: ["p"],
  
run: async(client, message, args) =>{
    if (!message.member.voice.channel)
      return message.channel.send({ embed: { description: "Make sure you join a voice channel first to play a song."}})

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return message.channel.send({ embed: { description: "I'm already in a voice channel. Make sure you join that", color: "RANDOM"}})

    if (!args[0])
      return message.channel.send("Please give a song name or link.")
//where is the embed of song
    client.player.play(message, args.join(" "), { firstResult: true });
  }
};
//PKAY KARO