const Discord = require("discord.js");
require("dotenv").config();

const TOKEN = process.env.TOKEN;

const welcomeChannelId = "959578522110812163";
const leaveChannelId = "960902938337902672";


const client = new Discord.Client({
    intents: [
        "GUILDS", 
        "GUILD_MESSAGES", 
        "GUILD_MEMBERS"
    ]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`) //shows message in terminal if bot is logged inS
});

client.on("messageCreate", (message) => { //checks if a message is sent bu a user
    if (message.content == "who is your creator chekBot"){ //text that has to be written for the bot to react
        message.reply("its the coolest person ever, <@386220075134222347>") //sends this message back upon recieving the correct sentence
    }
});

client.on("messageCreate", (message) => {
    if (message.content == "balls"){
        message.reply("why do thy exist in this ratched world, just to out the words balls. shame on thy.")
    }
});

client.on("guildMemberAdd", (member) => { //checks for people who join
    member.guild.channels.cache.get(welcomeChannelId).send(`welcome <@${member.id}>, you're now a visitor of CMG official comp server, make sure u read <#959586977437581403>, no i mean it, read the rules or you can't do anything in this server :stuck_out_tongue:`)
    //upper line gives message to players who just joined in specific channel
    console.log(`${member.id} joined the server`) //shows message in terminal if someone joins

});

client.on("guildMemberRemove", (member) => { //checks for people who leave
    member.guild.channels.cache.get(leaveChannelId).send(`<@${member.id}> leaves CMG, bye bye`) //checks specific channel for poeple who leave
    console.log(`${member.id} left the server`) //shows message in terminal if someone leaves
});


client.login(process.env.TOKEN); //makes sure the bot is logged in