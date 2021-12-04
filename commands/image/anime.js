/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */

const fetch = require("node-fetch");

const { MessageEmbed } = require("discord.js")

module.exports = {

  name: "anime",

  cooldown: 6500,

  category: "info",

  aliases: ["kitsu"],

  description: "Get anime information",

  usage: "`a!anime <anime_name>`",

  run: async (client, message, args) => {

    

    

    

    if(!args.length) {

      return message.channel.send("Please Give Anime Name")

    }

      let msg = await message.channel.send("Loading....")

    

    try {

    let body = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`)

    body = await body.json()

  

     

    

        let embed = new MessageEmbed()

        .setTitle(body.data[0].attributes.slug)

        .setColor("RED")

        .setDescription(body.data[0].attributes.synopsis)

        .setThumbnail(body.data[0].attributes.posterImage.original)

        .addField("Ratings", body.data[0].attributes.averageRating)

        .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)

        //.setImage(body.data[0].attributes.coverImage.large)

        //try it

        

        

        message.channel.send({embeds: [embed]});

        msg.delete();

    

          

      } catch (err) {

        msg.delete();

     

         return message.channel.send("Unable to find this anime");

       }               

                       

    

  }

}