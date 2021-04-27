
/*
 * Antique-gold
 * Copyright (C) 2021 DevZ-Org
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
  */

const {MessageEmbed, Discord } = require('discord.js');
const urban = require('relevant-urban')

module.exports = {
    
        name: 'urban',
				cooldown: 10000,
        description: 'Shows Urban Definition',
        aliases: [""],
				uimage:'https://media.discordapp.net/attachments/803290746496221264/803500685269270558/unknown.png',
        usage: '`a! <query>`',
        accessableby: "",
        run: async (client, message, args) => {
        
        if(!args[0]) return message.channel.send(`dude, Provide an Word`)

        let def;

        if (args.length) {
    
          const defs = await urban(args.join(' ')).catch(()=>{})
    
          if (!defs)  return message.channel.send( new MessageEmbed().setColor('FF0000').setDescription(`\u200B\n\nNo match found for **${args.join(' ')}**`).setThumbnail('https://files.catbox.moe/kkkxw3.png'))
    
          if (defs.constructor.name === 'Array') {
             let  total = Object.keys(defs).length
    
              if (!defs || !total) return message.channel.send( new MessageEmbed().setColor('FF0000').setDescription(`\u200B\n\nNo match found for **${args.join(' ')}**`).setThumbnail('https://files.catbox.moe/kkkxw3.png'))
    
              def = defs[1]
    
            } else if (defs.constructor.name === 'Definition') {
    
              def = defs
    
            }
    
            return message.channel.send( new MessageEmbed()
            .setAuthor(`Urban Dictionary`,`https://files.catbox.moe/kkkxw3.png`,`https://www.urbandictionary.com/`)
                .setThumbnail("")
            .setTitle(`Definition of ${defs.word}`)
            .setURL(defs.urbanURL)
            .addField('Example(s)', defs.example ? defs.example : 'N/A')
            .setColor('RANDOM')
            .setFooter(`Submitted by ${defs.author}`)
                                        .setTimestamp()
                   )
     } else {
          return message.channel.send( new Discord.MessageEmbed()
          .setAuthor(`Urban Dictionary`,`https://files.catbox.moe/kkkxw3.png`,`https://www.urbandictionary.com/`)
          .setTitle("Something went wrong.")
          .setColor("RANDOM"))
        }
    }
}