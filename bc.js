const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd' , member => {
var server = "511871944958803968"; 
var channel = "511875595773149185";
client.guilds.get(server).channels.get(channel).send("**Welcome To Neptune ,. :champagne_glass: **")
});

client.login("NTA3OTc4Mjg4MjUwMDkzNTY4.DsyoZQ.VhSBHpcHJwS54_TWlHMrz6DxkkY"); 