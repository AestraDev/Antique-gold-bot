/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require('discord.js');

const db = require('quickmongo');

module.exports = {
	name: 'leaderboard',

	cooldown: 1000,

	category: 'economy',

	aliases: ['lb'],

	description: 'Get the economy leaderboard',

	run: async (client, message, args) => {
		let difarr = [];
		client.users.cache.forEach(user => {
			difarr.push(user);
		});

		let allmem = difarr.length;
		let people = 0;
		let show = 200;

		let mes = [];

		for (let i = 0; i < allmem; i++) {
			let amount = db.get(`money_${message.guild.id}_${difarr[i].id}.pocket`);

			if (amount == null) continue;
			mes.push({
				name: difarr[i].username,
				amount: amount
			});
		}
		const realArr = [];
		mes.sort((a, b) => b.amount - a.amount);
		for (let k = 0; k < mes.length; k++) {
			people++;
			if (people >= show) continue;
			realArr.push(
				`\n${mes.indexOf(mes[k]) + 1}. <a:EX_star:804342247562412045> ${
					mes[k].name
				} - <:coinn:803591792473276416> ${mes[k].amount} `
			);
		}

		var finallb = realArr.join('\n');
		const embed = new MessageEmbed()
			.setAuthor(
				`Economy Leaderboard`,
				message.guild.iconURL({ dynamic: true })
			)
			.setDescription(finallb)
			.setThumbnail(
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9PYXAbBktzH5DOvcblQMaJGVf4lNhYGXs5g&usqp=CAU'
			)
			.setColor('#FFD801');

		// Worked hard by Colderry in finding and modify
		//
		message.channel.send(embed);
	}
};
