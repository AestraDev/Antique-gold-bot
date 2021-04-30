/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */


const { MessageEmbed } = require('discord.js');
const ms = require('ms');

module.exports = {
	name: 'giveaway',
	cooldown: 3000,
	aliases: ['gstart', 'gcreate'],
	description: 'Create a simple giveaway',
	uimage:
		'https://media.discordapp.net/attachments/803290746496221264/803517919589433344/unknown.png',
	usage: '`a!gcreate <#channel> <time> <winner no.> <prize>`',

	category: 'giveaway',

	run: async (client, message, args) => {
		if (
			!message.member.hasPermission('MANAGE_MESSAGES') &&
			!message.member.roles.cache.some(r => r.name === 'Giveaways')
		) {
			return message.channel.send(
				':x: Missing permissions'
			);
		}

		let giveawayChannel = message.mentions.channels.first();
		if (!giveawayChannel) {
			return message.channel.send(':x: Invalid channel');
		}

		let giveawayDuration = args[1];

		if (!giveawayDuration || isNaN(ms(giveawayDuration))) {
			return message.channel.send(':x: Invalid duration');
		}

		let giveawayNumberWinners = args[2];

	 	if (isNaN(giveawayNumberWinners) || parseInt(giveawayNumberWinners) <= 0) {
			return message.channel.send(
				':x: Invalid winnerCount'
			);
		}

		let giveawayPrize = args.slice(3).join(' ');


		if (!giveawayPrize) {
			return message.channel.send(':x: Invalid Prize');
		}


		client.giveawaysManager.start(giveawayChannel, {

			time: ms(giveawayDuration),

			prize: giveawayPrize,

      winnerCount: parseInt(args[1]),

			hostedBy: client.gg.hostedBy ? message.author : null,

			messages: {

				giveaway:
					(client.gg.everyoneMention ? '@everyone\n\n' : '') +
					'**GIVEAWAY**',
				giveawayEnded:
					(client.gg.everyoneMention ? '@everyone\n\n' : '') +
					'**GIVEAWAY**',
				timeRemaining:
					'Time remaining: **{duration}**!',
				inviteToParticipate: 'React with  🎁  to enter!',
				winMessage: 'Congratulations, {winners}! You won **{prize}**!',
				embedFooter: 'Ends at',
				embedColor: '#AE79F1',
				noWinner: 'Could not determine a winner!',
				hostedBy:
					'Hosted by: **{user}**!',
				winners: 'Winners',
				endedAt: 'Ended at',
				units: {
					seconds: 'seconds',
					minutes: 'minutes',
					hours: 'hours',
					days: 'days',
					pluralS: false
				}
			}
		});
		message.channel.send(
			`Giveaway started in ${giveawayChannel}, Check it out!`
		);
	}
};
