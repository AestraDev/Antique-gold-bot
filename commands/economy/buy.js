/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const { MessageEmbed } = require('discord.js');

const Discord = require('discord.js')

module.exports = {
		name: "buy",

		description: "Buy something from the store!",

    cooldown: 1000,

		category: "Economy",


run: async(client, message, args) => {

    let user = message.author;

    let author = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`)

    let authbal = await client.db.fetch(`money_${message.guild.id}_${user.id}.pocket`)

    let elbed = new MessageEmbed()
    .setTitle("Error")
    .setColor("RED")
    .setDescription(`${user}\n**You need 1000 antique coins to purchase a laptop**\n\nYour current balance is \`${authbal}\``);

    switch(args[0]) {
    case 'laptop':
        if (author < 1000) return message.channel.send({ embeds: [elbed]})
        
        await client.db.fetch(`laptop_${message.guild.id}_${user.id}`);
        await client.db.set(`laptop_${message.guild.id}_${user.id}`, 1)

        let sbed = new MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setDescription("You have purchased a laptop for 1000 coins\n\n To check use `a!inventory`");

        await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 1000)
        message.channel.send({ embeds: [sbed]})
    break;

    case 'phone':
        let eanp = new MessageEmbed()
        .setTitle("Error")
        .setColor("RED")
        .setDescription(`You need 1000 antique coins to purchase a phone`);

        if (author < 1000) return message.channel.send({ embeds: [eanp]})
       
        await client.db.fetch(`antiquephone_${message.guild.id}_${user.id}`)
        await client.db.add(`antiquephone_${message.guild.id}_${user.id}`, 1)

        let sanp = new MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setDescription("You have purchased a phone for 1000 coins\n\n To check use `a!inventory`");

        await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 100)
        message.channel.send({ embeds: [sanp]})
    break;

    case 'goldhat':
    case 'gold hat':
    case 'goldenhat':
        let ehat = new MessageEmbed()
        .setTitle("Error")
        .setColor("RED")
        .setDescription(`You need 40000 antique coins to purchase a goldenhat`);

        if (author < 40000) return message.channel.send({ embeds: [ehat]})
       
        await client.db.fetch(`goldhat_${message.guild.id}_${user.id}`)
        await client.db.add(`goldhat_${message.guild.id}_${user.id}`, 1)

        let shat = new MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setDescription("You have purchased a golden hat for 40000 coins\n\n To check use `a!inventory`");

        await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 40000)
        message.channel.send({ embeds: [shat]})
    break;
		  

    case "bug_catcher":
    case "bugcatcher":
        let ebc = new MessageEmbed()
        .setTitle("Error")
        .setColor("RED")
        .setDescription("You need 100 antique coins to purchase a bug catcher");

        if (author < 100) return message.channel.send({ embeds: [ebc]});
        let ibc = await client.db.get(`bugcatcher_${message.guild.id}_${user.id}`);
        if(ibc !== null) {
            if(ibc.rod === 1) return message.channel.send({ embed: { description: "You already have a bug catcher rod."}});
        }
        //await client.db.fetch(`fish_${message.guild.id}_${user.id}`)
        await client.db.add(`bugcatcher_${message.guild.id}_${user.id}.rod`, 1);
        await client.db.set(`bugcatcher_${message.guild.id}_${user.id}.bug`, [])

        let sbc = new MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setDescription("You have purchased a bug catcher for 100 coins\n\n To check use `a!inventory`");

        await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 100)
        message.channel.send({ embeds: [sbc]})
    break;
		case "fish":
    case "fishing":
        let Embed6 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You need 50 coins to purchase a fishing rod`);

        if (author < 50) return message.channel.send({ embeds: [Embed6]});
        let iffish = await client.db.get(`fish_${message.guild.id}_${user.id}`);
        if(iffish !== null) {
            if(iffish.rod === 1) return message.channel.send("You already have a fishing rod!");
        }
        //await client.db.fetch(`fish_${message.guild.id}_${user.id}`)
        await client.db.add(`fish_${message.guild.id}_${user.id}.rod`, 1);
        await client.db.set(`fish_${message.guild.id}_${user.id}.fish`, [])

        let Embed7 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Purchased a Fishing rod For 50 Coins`);

        await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 50)
        message.channel.send({ embeds: [Embed7]})
    break;
				case "hunt":
    case "hunting":
        let Embed11 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(` You need 50 coins to purchase a Hunting Rifle`);

        if (author < 50) return message.channel.send({ embeds: [Embed11]});
        let ihunt = await client.db.get(`hunt_${message.guild.id}_${user.id}`);
        if(ihunt !== null) {
            if(ihunt.rod === 1) return message.channel.send("You already have a hunting rifle!");
        }
        //await client.db.fetch(`fish_${message.guild.id}_${user.id}`)
        await client.db.add(`hunt_${message.guild.id}_${user.id}.rod`, 1);
        await client.db.set(`hunt_${message.guild.id}_${user.id}.hunt`, [])

        let Embed8 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Purchased a Hunting rifle For 50 Coins`);

        await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 50)
        message.channel.send({ embeds: [Embed8]})
    break;
	

    case 'lottery':
    case 'Lottery':
        let ely = new MessageEmbed()
        .setTitle("Error")
        .setColor("RED")
        .setDescription(`You need 300 coins to purchase a lottery`);

        if (author < 300) return message.channel.send({ embeds: [Embed8]})
       
        await client.db.fetch(`lottery_${message.guild.id}_${user.id}`)
        await client.db.add(`lottery_${message.guild.id}_${user.id}`, 1)

        let sly = new MessageEmbed()
        .setTitle("Success")
        .setColor("GREEN")
        .setDescription("You have purchased a lottery for 300 coins\n\n To check use `a!inventory`");

        await client.db.subtract(`money_${message.guild.id}_${user.id}.pocket`, 300)
        message.channel.send({ embeds: [sly]})
    break;

    default:
        let embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription('Enter a valid item name')
        message.channel.send({ embeds: [embed3]})
    break;

        }
	}
}