/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const discord = require('discord.js');

const mapping = {
	' ': '   ',

	'0': ':zero:',

	'1': ':one:',

	'2': ':two:',

	'3': ':three:',

	'4': ':four:',

	'5': ':five:',

	'6': ':six:',

	'7': ':seven:',

	'8': ':eight:',

	'9': ':nine:',

	'!': ':grey_exclamation:',

	'?': ':grey_question:',

	'#': ':hash:',

	'*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});

module.exports = {
	name: 'emojify',

 cooldown: 10000,
 
	aliases: ["emjoi"],

	category: 'Fun',

	usage: '`a!emojify <text>`',

	uimage:'https://media.discordapp.net/attachments/803290746496221264/803495067578007572/unknown.png',

	description: 'Returns provided text in emojify (emotes) form.',

	run: async (client, message, args) => {
		if (args.length < 1) {
			message.channel.send('You must provide some text to emojify!');
		}

		await message.delete();

		message.channel.send(
			args
				.join(' ')
				.split('')
				.map(c => mapping[c] || c)
				.join('')
		);
	}
};
