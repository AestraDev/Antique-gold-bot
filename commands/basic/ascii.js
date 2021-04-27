
/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */

const discord = require('discord.js');
const figlet = require('figlet');

module.exports = {
	name: 'ascii',
	cooldown: 11000,
	aliases: ["asc"],
	category: 'Fun',
	usage: '`a!ascii <text>`',
	uimage:"https://media.discordapp.net/attachments/803290746496221264/803491222256615434/unknown.png",
	description: 'Returns provided text in ascii format.',
	run: async (client, message, args) => {
		let text = args.join(' ');
		if (!text) {
			return message.channel.send(
				`Please provide text for the ascii conversion!`
			);
		}
		let maxlen = 20;
		if (text.length > 20) {
			return message.channel.send(
				`Please put text that has 20 characters or less because the conversion won't be good!`
			);
		}
		figlet(text, function(err, data) {
			message.channel.send(data, {
				code: 'AsciiArt'
			});
		});
	}
};
