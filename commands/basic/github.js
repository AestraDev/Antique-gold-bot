/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
    
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
    
        name: 'github',
        cooldown: 5000,
        description: 'Shows information about github user',
        aliases: ["github"],
				uimage:'https://media.discordapp.net/attachments/803290746496221264/803495544244666368/unknown.png',
        usage: '`a!github <user>`',
  
    run: async (client, message, args) => {
    
        const name = args.join(' ');
		if (!name) {
			return message.channel.send(
			`${client.emotes.error}  Please provide a valid user`,
			);
		}

		const url = `https://api.github.com/users/${name}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send(
				`${client.emotes.error} An error occured, please try again!`,
			);
		}

		try{
			const embed = new MessageEmbed()
				.setColor("RANDOM")
				.setTitle(`${response.login} (${response.id})`)
				.setDescription(response.bio ? response.bio : 'None')
				.addFields(
					{ name: '》 Followers', value: `\`\`\`${response.followers.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Following', value: `\`\`\`${response.following.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Repositories', value: `\`\`\`${response.public_repos.toLocaleString()}\`\`\``, inline: true },
					{ name: '》 Email', value: `\`\`\`${response.email ? response.email : 'None'}\`\`\`` },
					{ name: '》 Company', value: `\`\`\`${response.company ? response.company : 'None'}\`\`\`` },
					{ name: '》 Location', value: `\`\`\`${response.location ? response.location : 'None'}\`\`\`` },
				)
				.setURL(response.html_url)
				.setThumbnail(response.avatar_url)
				.setFooter('© Antique-Gold', 'https://cdn.discordapp.com/avatars/781557752111431690/da9c119b6283ea7e11db3594bf8c5327.webp?size=4096')
        		.setTimestamp();

			message.channel.send({embeds: [embed]});;
		}
		catch (err) {
			return message.channel.send(
				` Please provide a valid user`,
			);
		}
    }
}