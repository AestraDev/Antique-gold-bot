/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
module.exports = {
    name: 'pause',
		cooldown:1000,
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    run: async(client, message) =>{
        if (!message.member.voice.channel) return message.channel.send(`❌ - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`❌ - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`❌ - No music currently playing !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`❌ - The music is already paused !`);

        client.player.pause(message);

        message.channel.send(`✅ - Song ${client.player.getQueue(message).playing.title} paused !`);
    },
};