/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const canvacord = require("canvacord")

module.exports = { 
  name: "comment",
  description: "Get a custom comment",
  usage: "`a!comment <customtext>`",
  aliases: ["cm"],
  cooldown: 5000,
  category: "Image",
  run: async (client, message, args) => {
    
    let yee = false
        message.channel.startTyping()
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.youtube({
            username: message.author.username,
            content: args.join(' '),
            avatar: avatar
        }).catch((err) => {
            yee = true
            message.channel.stopTyping()
            return message.channel.send(err.toString())
  
        });
				let msg = args.join(" ");
        if (!msg) {
            return message.reply("What is your comment?");
        }
				
        if(!yee) {
            let attachment = new Discord.MessageAttachment(image, "Comment.png");
            message.channel.send({ embed: { description: "Commenting..."}}).then((msg) => {
      setTimeout(function() {
        msg.delete().then((msg) => {
          message.channel.send(attachment)
        })
      }, 5000)
    });
		
            message.channel.stopTyping()
    
  }
    
  }
  
};
