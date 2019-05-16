const Discord = require('discord.js');
const client = new Discord.Client();


client.once('ready', () => {
    console.log('Ready!');
});



client.on("message",async message => {
    if (message.content === 'fishbot.exe') {
        setTimeout(() => message.channel.send("t!daily"), 79200000);
        var interval = setInterval (function () {
            message.channel.send("t!fish")
          }, 1 * 30000); 
     }
     if (message.content.includes('you have insufficient credits to fish.')) {
       await setTimeout(() => message.channel.send("t!fish sell common"), 5000);
       await setTimeout(() => message.channel.send("t!fish sell uncommon"), 11000);
      await setTimeout(() => message.channel.send("t!fish sell garbage"), 16000);
}
});


client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN);
