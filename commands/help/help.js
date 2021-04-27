/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'help',
	cooldown: 1000,
	run: async (client, message, args) => {
		if (args[0]) {
			const command = await client.commands.get(args[0]);
			const noemx = new MessageEmbed()
				.setDescription('Unknown Command: ' + args[0])
				.setColor('#FF2400');

			if (!command) {
				return message.channel.send(noemx);
			} // Done
			// so now in the commands, make the first letter caps and add a space between commas .... see what i do
			let embed = new MessageEmbed()
				.setTitle(command.name)
				.setDescription(command.description ? command.description : 'Not Given')
				.addField('Aliases', command.aliases ? command.aliases : 'None')
				.addField('Usage', command.usage ? command.usage : 'Not Mentioned')
				.setImage(command.uimage)
				//.setThumbnail(client.user.displayAvatarURL())
				.setColor('RANDOM')
				.setFooter('Antique Gold', client.user.displayAvatarURL());

			return message.channel.send(embed);
		} else {
			const embed = new MessageEmbed()
				//this line make a embed

				.setAuthor(`${message.guild.me.displayName}`, message.guild.iconURL())
				.setThumbnail(client.user.displayAvatarURL())
				.setColor('RANDOM') //set color I set random you can set like #FF00FF
				.setDescription(
					`**antique-gold prefix is  \`a!\`**. Use \`a!help {commamndname}\` for more info.  `
				);
			embed.addField(
				`> category `,
				'`commands`'
			);				.setFooter(
					`footer`
				);
			message.channel.send(embed);
		}
	}
};
