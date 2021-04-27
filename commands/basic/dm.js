/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'DM',
	cooldown: 18000,
	aliases: ['direct message', 'dm'],
	uimage:
		'https://media.discordapp.net/attachments/803290746496221264/803494116968366121/unknown.png',
	category: 'Server',
	usage: '`a!dm <text to say>``',
	description: 'Returns provided text in Embed form in dm',
	run: async (client, message, args) => {
		if (!client.ownerlist.owners.includes(message.author.id))
			return message.channel.send(
				'Sorry but only my developers can dm users using me.'
			);
		if (!message.member.hasPermission('MANAGE_MESSAGE'))
			return message.channel.send(`Get permissions.`);
		//await message.delete()
		let say = message.content
			.split(' ')
			.slice(1)
			.join(' ');
		if (!say)
			return message.channel.send(
				`<a:Wrongg:804344979459538994> | ` + 'I Cannot DM Blank Message'
			);
		let embed = new MessageEmbed()
			.setDescription(`${say}`)
			.setColor('RANDOM')
			.setFooter(`Sended by ${message.author.username} .`);
		let user =
			(await message.mentions.members.first()) ||
			message.guild.members.cache.get(args[0]) ||
			message.guild.members.cache.find(
				r =>
					r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()
			) ||
			message.guild.members.cache.find(
				r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()
			) ||
			message.member;
		user.send(embed);
		message.reply('I have send them DM <:Mail_32:804261018565214228>');
	}
}; 
