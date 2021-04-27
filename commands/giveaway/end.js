/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const ms = require('ms');

module.exports = {

  name: "end",
  cooldown: 3000,
  aliases: ["gend","gstop"],
  description: "end giveaway",
  uimage:"https://media.discordapp.net/attachments/803290746496221264/803519867008712714/unknown.png",
  usage: "`a!gend <message id>`",

  category: "giveaway",
	run: async (client, message, args) => {

     if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Missing permissions');
    }

     if(!args[0]){
        return message.channel.send(':x: Invalid Id');
    }

    
    let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
    if(!giveaway){
        return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') + '`.');
    }
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    
    .then(() => {
            message.channel.send('Giveaway will end in less than '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' seconds...');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is already ended.`)){
            message.channel.send('This giveaway is already ended!');
        } else {
            console.error(e);
            message.channel.send('An error occured.....');
        }
    })
	}};
