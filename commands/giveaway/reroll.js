/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const ms = require("ms");

module.exports = {

  name: "reroll",
  cooldown: 3000,
  aliases: ["greroll","groll"],
  description: "Create a simple giveaway",
  uimage:"https://media.discordapp.net/attachments/803290746496221264/803520629411414056/unknown.png",
  usage: "`a!greroll <message id>",
  category: "giveaway",
  run: async (client, message, args) => {

    
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Missing permissions');
    }

    if(!args[0]){
        return message.channel.send(':x: Invalid ID');
    }

    let giveaway = 
  
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    
    if(!giveaway){
        return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
    }

   
    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
                message.channel.send('Giveaway rerolled!');
    })
    .catch((e) => {
        if(e.startsWith(`Giveaway with message ID ${giveaway.messageID} is not ended.`)){
            message.channel.send('This giveaway is not ended!');
        } else {
            console.error(e);
            message.channel.send('An error occured.....');
        }
    });

}};