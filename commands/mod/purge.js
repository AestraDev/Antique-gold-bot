/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require('discord.js') 
const Cooldown = new Discord.Collection();
module.exports = {
  "name": "purge",
  cooldown: 15000,
  "description": "Deletes given no. of msg" 
}
module.exports.run = async (bot, message, args) => {
    if (message.deletable)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply("Missing Permissions!").then(m => m.delete(5000));
    }
      if (parseInt(args[0]) > 1000) {
       return message.channel.send('pls provide an number from 1 to 1000')
    } 
		
		 
    if (isNaN(args[0]) || parseInt(args[0]) <= 1) {
       return  message.reply("This is not a number").then(m => m.delete(5000));
    }

    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = 100;
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.delete()

    message.channel.bulkDelete(deleteAmount, true)
    .catch(err => message.reply(`Something went wrong... ${err}`));

}