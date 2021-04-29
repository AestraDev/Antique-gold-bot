/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
	name: 'hunt',

	description: 'hunt',

	cooldown: 1000,

	aliases: ['hunt'],

	category: 'economy',

	run: async (client, message, args) => {
		const rand = (min, max) => {
			return Math.floor(Math.random() * (max - min)) + min;
		};

		let user = message.author;
		let timeout = 60000;
		let hunt = [
			'Duck',
			'Pikachu :joy:',
			'Lion',
			'Tiger',
			'Elephant',
			'Crocodile',
			'monkey',
			'Dog',
			'Cat',
			'Leapord',
			'Dinosaur'
		];

		let randn = rand(0, parseInt(hunt.length));
		let randrod = rand(15, 30);

		let huntToWin = hunt[randn];

		let fishdb = await client.db.fetch(`hunt_${message.guild.id}_${user.id}`);
		let rod = await client.db.get(`hunt_${message.guild.id}_${user.id}.rod`);
		let rodusage = await client.db.get(
			`hunt_${message.guild.id}_${user.id}.rodusage`
		);
		let wait = await client.db.fetch(
			`hunt_${message.guild.id}_${user.id}.wait`
		);

		if (!rod)
			return message.channel.send(
				`You went to hunt, and got killed by wild animals. Better buy a Hunting rifle`
			);

		if (rodusage) {
			if (fishdb.rodusage >= randrod) {
				await client.db.delete(`hunt_${message.guild.id}_${user.id}.rod`);
				return message.reply(
					'You met with another group of  hunters, and they didnt like the style you went. They broke your rifle, buy another.'
				);
			}
		}

		if (wait !== null && timeout - (Date.now() - wait) > 0) {
			let time = ms(timeout - (Date.now() - wait));

			message.channel.send(
				` You have already hunt!\nhunt it again in ${time.seconds}s`
			);
		} else {
			message.channel.send(`You've Hunted and gotten a ${huntToWin}`);

			await client.db.push(
				`hunt_${message.guild.id}_${user.id}.hunt`,
				huntToWin
			);
			await client.db.set(
				`hunt_${message.guild.id}_${user.id}.wait`,
				Date.now()
			);
			await client.db.add(`hunt_${message.guild.id}_${user.id}.rodusage`, 1);
		}
	}
};
