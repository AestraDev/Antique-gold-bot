const {
  Client,
  Collection,
  MessageEmbed,
  MessageAttachment
} = require("discord.js");
const { config } = require("dotenv");
const dotenv = require("dotenv");
dotenv.config() 
const { prefix, token } = require("./config.json");
const  { Database }  = require("quickmongo");
// Must enable these intents of your bot in dev portal
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
});
const canvas = require("canvacord");
const Cooldown = new Collection();
const ms = require("ms");
const fs = require("fs");
const { Player} = require("discord-player");
client.player = new Player(client);
client.db =  new Database("mongodb+srv://foxbot:foxbot@hyplix.j83qp.mongodb.net/Foxy?retryWrites=true&w=majority")
client.config = require("./config.json");

client.emotes = client.config.emotes;
client.filters = client.config.filters;
client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();
client.gg = require("./config.json");
client.ownerlist = require("./ownerlist.json");
client.commands = new Collection();
client.aliases = new Collection();

//--------Run the command loader-----------
["command", "event"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.db.on("ready",() => {
  
  console.log(`CONNECTED WITH DATABASE `)
})
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  //--------------COOLDOWN----------------------
  if (!command) return;
  if (command) {
    if (command.cooldown) {
      if (Cooldown.has(`${command.name}${message.author.id}`))
        return message
          .reply({
            embed: {
              color: "#Ff2400",
              title: `Cooldown: ${command.name}`,
              description: command.cooldownmsg
                ? command.cooldownmsg
                : `Command is currently on a \`${ms(
                    Cooldown.get(`${command.name}${message.author.id}`) -
                      Date.now(),
                    { long: true }
                  )}\` cooldown.`
            }
                    })
          .catch(console.error);
      command.run(client, message, args);
      Cooldown.set(
        `${command.name}${message.author.id}`,
        Date.now() + command.cooldown
      );
      setTimeout(() => {
        Cooldown.delete(`${command.name}${message.author.id}`);
      }, command.cooldown);
    }
  }
});

//----------------GIVEAWAY--------------------------

const { GiveawaysManager } = require("discord-giveaways");
client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 3000,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎁"
  }
});

//------------------------Snipe--------------------------

client.snipes = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});

//------------------------Snipe Edit--------------------------

client.snipeedit = new Map();
client.on("messageUpdate", function(message, channel) {
  client.snipeedit.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});

// -----------------------Message Counter-----------------------------

client.on("message", async message => {
  client.db.add(`globalMessages_${message.author.id}`, 1);

  client.db.add(`serverMessages_${message.guild.id}_${message.author.id}`, 1);
});

// -----------------------PING AND REPLY-----------------------------

client.on("message", msg => {
  if (msg.content === "<@781557752111431690>") {
    msg.reply("Antique Gold prefix is `a!`");
  }
});
client.on("message", msg => {
  if (msg.content === "<@781557752111431690> prefix") {
    msg.reply("Antique Gold prefix is `a!`");
  }

});

//--------Welcome------------

client.on("guildMemberAdd", async member => {
  const { CanvasSenpai } = require("canvas-senpai");

  const canva = new CanvasSenpai();

  let chx = client.db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {
    return;
  }

  let data = await canva.welcome(member, {
    link:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfYy7BsyXlNVdEhI9zmZcbQb4SDqMx0_hleQ&usqp=CAU",
    blur: false
  });
  const attachment = new MessageAttachment(data, "welcome-image.png");
  client.channels.cache
    .get(chx)
    .send(
      `<a:rainbowstar:803594665236365363> Welcome to ${member.guild.name}, ${member.user}\nYou are our ${member.guild.memberCount}th Member. Enjoy your stay! `,
      attachment
    );
});


//--------Login-via-Token-----------------

client.login(process.env.TOKEN);
