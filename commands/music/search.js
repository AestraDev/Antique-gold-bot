/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
module.exports = {
    name: 'search',
		cooldown:1000,
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    run: async(client, message, args) =>{
        if (!message.member.voice.channel) return message.channel.send(`❌- You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`❌- You are not in the same voice channel !`);

        if (!args[0]) return message.channel.send(`❌ - Please indicate the title of a song !`);

        client.player.play(message, args.join(" "));
    },
};