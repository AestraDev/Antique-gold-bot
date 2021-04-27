/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
module.exports = {
  name: "queue",
	cooldown:1000,
  aliases: [],
  category: "Music",
  utilisation: "{prefix}queue",

  run: async(client, message)=> {
    if (!message.member.voice.channel)
      return message.channel.send(
        `❌ - You're not in a voice channel !`
      );

    if (
      message.guild.me.voice.channel &&
      message.member.voice.channel.id !== message.guild.me.voice.channel.id
    )
      return message.channel.send(
        `❌ - You are not in the same voice channel !`
      );

    const queue = client.player.getQueue(message);

    if (!client.player.getQueue(message))
      return message.channel.send(
        `❌ - No songs currently playing !`
      );

    message.channel.send(
      `**Server queue - ${message.guild.name} ${client.emotes.queue} ${
        client.player.getQueue(message).loopMode ? "(looped)" : ""
      }**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` +
        (queue.tracks
          .map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${
              track.author
            } (requested by : ${track.requestedBy.username})`;
          })
          .slice(0, 5)
          .join("\n") +
          `\n\n${
            queue.tracks.length > 5
              ? `And **${queue.tracks.length - 5}** other songs...`
              : `In the playlist **${queue.tracks.length}** song(s)...`
          }`)
    );
  }
};