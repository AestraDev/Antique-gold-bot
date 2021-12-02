/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */

const discord = require('discord.js');

const got = require('got');

module.exports = {
	name: 'amazeme',
	cooldown: 10000,
	aliases: ["am", "ame"],
	category: 'Fun',
	usage: '`a!amazeme`',
  uimage:"https://media.discordapp.net/attachments/803290746496221264/803489790288592966/unknown.png?width=447&height=492",
	description: 'Returns random amazing fact/image.',

	run: async (client, message, args) => {
				got('https://www.reddit.com/r/interestingasfuck/random.json')
			.then(response => {
				let content = JSON.parse(response.body);

				var title = content[0].data.children[0].data.title;

				var amazeme = content[0].data.children[0].data.url;

				let wow = new discord.MessageEmbed()

					.setDescription(`**` + title + `**`)

					.setImage(amazeme)

					.setFooter(
						'© Antique-Gold',
						'https://cdn.discordapp.com/avatars/781557752111431690/da9c119b6283ea7e11db3594bf8c5327.webp?size=4096'
					)
					.setTimestamp()
					.setColor('RANDOM');

				message.channel.send({ embeds: [wow]});
			})
			.catch(console.error);
	}
};
