/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require('discord.js');

const ms = require('ms');

const { match } = require('../../ecofunc.js');

module.exports = {
	name: 'balance',

	description: 'Check your balance',

	cooldown: 1,

	aliases: ['bal'],

	category: 'economy',

	run: async (client, message, args) => {
		let user =
			message.mentions.users.first() ||
			client.users.cache.get(args[0]) ||
			match(args.join(' ').toLowerCase(), message.guild) ||
			message.author;

		let bal = await client.db.fetch(
			`money_${message.guild.id}_${user.id}.pocket`
		);
		if (bal === null) bal = 0;

		let bank = (await client.db.fetch(
			`money_${message.guild.id}_${user.id}.bank`
		))
			? client.db.fetch(`money_${message.guild.id}_${user.id}.bank`)
			: 0;

		//? client.db.fetch(`money_${message.guild.id}_${user.id}.bank`): "0"
		let TotalMoney = bal + bank;

		let moneyEmbed = new MessageEmbed()
			.setTitle(`**${user.username}'s Balance**`)
			.setColor('RANDOM')
			.setDescription(
				`<a:arrowright:803594076036661279> **Wallet:** <:coinn:803591792473276416>   ${bal}\n<a:arrowright:803594076036661279> **Bank:** <:coin:803591792473276416>  ${bank}\n<a:arrowright:803594076036661279> **Total Money:** <:coin:803591792473276416> ${TotalMoney}`
			)
			.setFooter('Antique Gold');
				message.channel.send(moneyEmbed);
	}
};
