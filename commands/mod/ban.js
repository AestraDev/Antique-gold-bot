/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
  
const Discord = require('discord.js') 

module.exports = {
  name: "ban",
	uimage:'https://media.discordapp.net/attachments/803290746496221264/803503404265242624/unknown.png',
	usage:'`a!ban <user> <reason>`',
	aliases: ["b"],
  description: "Ban a user",
  cooldown: 10000,
}
module.exports.run = async (bot, message, args) => {
  const { member, mentions } = message
  const tag = `<@${member.id}>`
  if(message.member.hasPermission('BAN_MEMBERS')) {
    const target = mentions.users.first()
                let servername = message.guild.name;


      if (target) { 
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${tag} That user has been banned.`)
        target.send(`You Have Been kicked from ${servername}!`).catch(error => {
      message.channel.send(`I Couldn't Send Him Dm Because He Has Disabled DM`)
      })} else {
          const Noperm = new Discord.MessageEmbed() 
          .setTitle('No permissions!') 
          .setDescription('You must have permission to use this command! Permission: BAN_MEMBERS') 
          message.channel.send(Noperm) 
        }
  }
}