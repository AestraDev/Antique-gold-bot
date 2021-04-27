/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  

const Discord = require('discord.js');
const db = require("quick.db")

module.exports = {
	
		name: "sell",
		cooldown:1000,
		description: "Sell something you dont use/want!",
		category: "Economy",
	

run: async (client, message, args) => {
    
    let user = message.author;

    if(args[0].toLowerCase() == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:Wrongg:804344979459538994> You don't have Nikes to sell`);

        let nikeses = await client.db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        await client.db.fetch(`nikes_${message.guild.id}_${user.id}`)
        await client.db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:ver:804941503201804288>Sold Fresh Nikes For 600 Coins`);

        await client.db.add(`money_${message.guild.id}_${user.id}.pocket`, 600)
        message.channel.send(Embed3)
    } else if(args[0].toLowerCase() == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:Wrongg:804344979459538994> You don't have a Car to sell`);

       let cars = await db.fetch(`car_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        await client.db.fetch(`car_${message.guild.id}_${user.id}`)
        await client.db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:ver:804941503201804288> Sold a Car For 800 Coins`);

        await client.db.add(`money_${message.guild.id}_${user.id}.pocket`, 800)
        message.channel.send(Embed3)
    } else if(args[0].toLowerCase() == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:Wrongg:804344979459538994> You don't have a Mansion to sell`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        await client.db.fetch(`house_${message.guild.id}_${user.id}`)
        await client.db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:ver:804941503201804288> Sold a Mansion For 1200 Coins`);

        await client.db.add(`money_${message.guild.id}_${user.id}.pocket`, 1200)
        message.channel.send(Embed3)
		};

	}
}