/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
        name: 'clyde',
				cooldown: 10000,
        description: 'Shows your text as Clyde\'s message',
        aliases: ["clyde"],
        usage: '`a!clyde <text>`',
				uimage:"https://media.discordapp.net/attachments/803290746496221264/803492875006509076/unknown.png",
        accessableby: "",
    run: async (client, message, args) => {
    
        const text = args.slice().join(' ');
		if (!text) {
			return message.channel.send(
				'❎ Please provide valid text.',
			);
		}

		const url = `https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send('❎ An error occured, please try again!');
		}
		const attachment = new MessageAttachment(response.message, 'clyde.png');
		return mmessage.channel.send({files: [attachment]});
  
    }
}