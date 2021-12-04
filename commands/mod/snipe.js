/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require('discord.js');

module.exports = {
	name: 'snipe',
	cooldown: 1000,
	usage: '`a!snipe`',
	description: 'get the deleted message',
	aliases: ['s'],
	run: async (client, message, args) => {
		const msg = client.snipes.get(message.channel.id);
		if (!msg)
			return message.channel.send(
				'There are no deleted messages in this channel!'
			);
		const embed = new Discord.MessageEmbed()
			.setAuthor(msg.author)
			.setDescription(msg.content)
			.setColor('#8AFB17')
			.setThumbnail(
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfE8tCpK5BZH-SY6GahjM75kQW2qrSEX6Kg&usqp=CAU.png'
			)
			.setFooter(
				'© Antique Gold',
				'https://cdn.discordapp.com/avatars/781557752111431690/da9c119b6283ea7e11db3594bf8c5327.webp?size=4096'
			)
			.setTimestamp();
		if (msg.image) embed.setImage(msg.image);

		message.channel.send({embeds: [embed]});;
	}
};
