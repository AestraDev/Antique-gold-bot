/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require('discord.js');

module.exports = (client, message, track) => {
	let npbed = new MessageEmbed()
		.setTitle(
			`Started Playing`
		)
		.setColor('RANDOM')
		.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
		.addField('Song Name', `⦿ ${track.title}`)
		.addField(
			'Duration',
			`⦿ ${track.duration}`
		)
			.addField('Added by', `${client.user.username}`);

	message.channel.send(npbed);
};
