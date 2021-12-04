/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
  
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

 
module.exports = {
  name: "kick",
  cooldown: 10000,
  aliases: [],
  description: "Kick A Member!",
  usage: "kick <Mention Member>",

  run: async (client, message, args) => {
    //Start
    if (!message.member.hasPermission("KICK_MEMBERS"))

      return message.channel.send(

        `You Don't Have Permission To Use This Command!`

      );

 

    let Member = message.mentions.users.first();

 

    if (!Member)

      return message.channel.send(

        `Please Mention A Member That You Want To Kick!`

      );

 

    if (!message.guild.members.cache.get(Member.id))

      return message.channel.send(`Please Mention A Valid Member!`);

 

    if (Member.id === message.author.id)

      return message.channel.send(`You Can't Kick Your Self!`);

 

    if (Member.id === client.user.id)

      return message.channel.send(`Please Don't Kic Me ;-;`);

 

    if (Member.id === message.guild.owner.user.id)

      return message.channel.send(`You Can't Kick Owner Of Server!`);

 

    let Reason = args.slice(1).join(" ");

    if (!Reason) return message.channel.send(`Plz Provide reason`);

    let User = message.guild.member(Member);

 

    if (!User.kickable)

      return message.channel.send(`I Can't Kick That Member!`);

 

    try {

      console.log(`Member Is Going To Get Kick!`);

 

      setTimeout(function() {

        User.kick({

          reason: `${Reason}` + ` ${message.author.tag}`

        });

      }, 2000);

      let embed = new Discord.MessageEmbed()
        .setColor("RED")

        .setTitle(`Member Kicked!`)

        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)

        .addField(`Kicked Member`, `${Member.tag} (${Member.id})`)

        .addField(`Reason`, `${Reason || "No Reason Provided!"}`)

        .setFooter(`Requested by ${message.author.username}`)

        .setTimestamp();

      if (User && Member.bot === false)

        Member.send(

          `You Have Been Kicked From **${message.guild.name}** For ${Reason ||

            "No Reason Provided!"}`

        );

      message.channel.send({embeds: [embed]});;

      console.log(

        `User: ${Member.tag} (${Member.id}) Just Got Kicked From ${

          message.guild.name

        } For ${Reason || "No Reason Provided!"}`

      );

    } catch (error) {

      return message.channel

        .send(

          `I Can't Kick That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`

        )

        .then(() => console.log(error));

    }

 

    //End

  }

};