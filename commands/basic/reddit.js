/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const superagent = require('superagent');

module.exports = {
	name: 'reddit',
  cooldown: 10000,
	description: 'Shows pic from Reddit',
	aliases: ['reddit'],
	uimage:'https://media.discordapp.net/attachments/803290746496221264/803499445467086848/unknown.png',
	usage: '`a!reddit <search>`',
	accessableby: '',
	run: async (client, message, args) => {
		if (!args[0]) return message.reply("You didn't provide a SubReddit Name!");
		let { body } = await superagent
			.get(`https://www.reddit.com/r/${args}.json?sort=top&t=week`)
			.query({ limit: 800 });

		var allowed = message.channel.nsfw
			? body.data.children
			: body.data.children.filter(post => !post.data.over_18);
		if (!allowed.length)
			return message.reply('We are running out of  memes. 😂😂😂');
		var randomNumber = Math.floor(Math.random() * allowed.length);
		var embed = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle(allowed[randomNumber].data.title)
			.setDescription(`**Author** - ${allowed[randomNumber].data.author}`)
			.setImage(allowed[randomNumber].data.url)
			.addField(
				'Information: ',
				'• **UpVotes:** ' +
					allowed[randomNumber].data.ups +
					' / • **Comments:** ' +
					allowed[randomNumber].data.num_comments
			)
			.setTimestamp()
			.setFooter(
				`© Antique-Gold `,
				'https://cdn.discordapp.com/avatars/781557752111431690/da9c119b6283ea7e11db3594bf8c5327.webp?size=4096'
			);
		return message.channel.send({ embeds: [embed]});
	}
};
