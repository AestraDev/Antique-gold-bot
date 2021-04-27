/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */
  
const weather = require('weather-js');

const discord = require('discord.js')

//TIME TO END STREAM

module.exports = {

  name: "weather",
  cooldown: 10000,
  description: "Get the weather of anywhere",
  
  category: "info",
  uimage:'https://media.discordapp.net/attachments/803290746496221264/803501149901553696/unknown.png',
  usage: "a!weather <place>`",

  run: (client, message, args) => {

    

    

    if(!args.length) {

      return message.channel.send("Please give the weather location")

    }

    

 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {

try {

 

let embed = new discord.MessageEmbed()

.setTitle(`Weather - ${result[0].location.name}`)

.setColor("#ff2050")

.setDescription("Temperature units can may be differ some time")

.addField("Temperature", `${result[0].current.temperature} Celcius`, true)

.addField("Sky Text", result[0].current.skytext, true)

.addField("Humidity", result[0].current.humidity, true)

.addField("Wind Speed", result[0].current.windspeed, true)//What about image

.addField("Observation Time", result[0].current.observationtime, true)

.addField("Wind Display", result[0].current.winddisplay, true)

.setThumbnail(result[0].current.imageUrl);

   message.channel.send(embed)

} catch(err) {

  return message.channel.send("Unable To Get the data of Given location")

}

});   

    //LETS CHECK OUT PKG

    

  }

}