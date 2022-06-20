const Discord = require("discord.js");
require("dotenv").config();

const TOKEN = "OTg4NDc0MzM4ODA4MzIwMDcw.GDEPj6.rKa7yvsSpd3vzAxeQBhism8-DuZqEpF4ikhqqM";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if (message.content == "hi bud"){
        message.reply("hey there buddy!")
    }
});



client.login(process.env.TOKEN);