/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const { MessageEmbed } = require('discord.js');

const ms = require('ms');

module.exports = {
	name: 'work',

	description: 'Work and earn economy currency',

	cooldown: 1,

	category: 'economy',

	run: async (client, message, args) => {
		let user = message.author;

		let author = await client.db.fetch(`work_${message.guild.id}_${user.id}`);

		let timeout = 180000;
		//let timeout = 1;

		if (author !== null && timeout - (Date.now() - author) > 0) {
			let time = ms(timeout - (Date.now() - author));

			let timeEmbed = new MessageEmbed()
				.setTitle('Cooldown')
				.setColor('RANDOM')
				.setDescription(
					`Too much work is not good for health.\n\nTry again in \`${
						time.minutes
					}m ${time.seconds}s\``
				);
			message.channel.send(timeEmbed);
		} else {
			let replies = [
				'Programmer',
				'Ethical Hacker',
				'Serial Killer',
				'Detective',
				'Engineer',
				'Discord mod abuser',
				'Athelete',
				'Doctor',
				'Police',
				'Developer',
				'FBI officer',
				'Merchant',
				'Chef',
				'Maid',
				'Servent',
				'Football Player'
			];

			let result = Math.floor(Math.random() * replies.length);
			let amounta = Math.floor(Math.random() * 1210) + 1; // Colderry/Sadma //restart xD
			let multiplier = await client.db.fetch(`multiplier_${message.guild.id}`);
			if (!multiplier) multiplier = 1;
			let amount = amounta * multiplier;

			/*
			let embed1 = new MessageEmbed()
				.setColor('#1F45FC')
				.setDescription(
					`You worked as a ${replies[result]} and earned ${amount} dollars.`
        );*/
			message.channel.send(
				`${user} Worked as a **${
					replies[result]
				}** and earned **${amount}** Antique Coins. Now rest for few minutes.`
			);

			//message.channel.send(`**You worked as a ${replies[result]} and earned ${amount} antique coins**`);

			await client.db.add(
				`money_${message.guild.id}_${user.id}.pocket`,
				amount
			);
			await client.db.set(`work_${message.guild.id}_${user.id}`, Date.now());
		}
	}
};
