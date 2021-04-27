/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
module.exports = {
    name: 'loop',
		cooldown:1000,
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    run: async(client, message, args) =>{
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`❌ - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`❌ - No music currently playing !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`✅ - Repeat mode **disabled** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`✅ - Repeat mode **enabled** the whole queue will be repeated endlessly !`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`✅ - Repeat mode **disabled** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`✅ - Repeat mode **enabled** the current music will be repeated endlessly !`);
            };
        };
    },
};