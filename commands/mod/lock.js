/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const Discord = module.require("discord.js");
const ms = require("ms"); //Make sure to install ms package

module.exports = {
    name: "lockdown",
		cooldown:1000,
		aliases:["lock"],
		uimage:"https://media.discordapp.net/attachments/803290746496221264/803506326608019496/unknown.png",
		usage:'`a!lockdown <#channel>`',
    description: "Start a timed lockdown in a channel",
    run: async(client, message, args) => {
        const time = args.join(" ");
        if (!time) {
        return message.channel.send("Enter a valid time period in `Seconds`, `Minutes` or `Hours`")
        }
        if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
            return message.channel.send(`You don't have enough Permisions`)
        }
        message.channel.overwritePermissions([
            {
               id: message.guild.id,
               deny : ['SEND_MESSAGES'],
            },
           ],);
           const embed = new Discord.MessageEmbed()
           .setTitle("Channel Updates")
           .setDescription(`${message.channel} has been placed under lockdown for ${time}`)
           .setColor("RANDOM");
           message.channel.send({embeds: [embed]});

           let time1 = (`${time}`)
           setTimeout(function(){
           message.channel.overwritePermissions([
               {
               id: message.guild.id,
               null: ['SEND_MESSAGES'],
               },
            ],);
           const embed2 = new Discord.MessageEmbed()
           .setTitle("Channel Updates")
           .setDescription(`Locked has been lifted in ${message.channel}`)
           .setColor("RANDOM");
           message.channel.send({embeds: [embed2]});
        }, ms(time1));
        message.delete();
    }
}