const Discord = require("discord.js");

/* Music module by Dhvit (@dhvitOP). Thanks ❤️ */

module.exports = {
 name: "skip",
 aliases: [],
 description: "Skip the music",
 category: "Music",
 usage: "skip",
 run: async (client, message, args) => {
  try {
   const channel = message.member.voice.channel;
   if (!channel) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: `${client.bot_emojis.error} | You should join a voice channel before using this command!`,
     },
    });
   }
   let queue = message.client.queue.get(message.guild.id);
   if (!queue) {
    return message.lineReply({
     embed: {
      color: 16734039,
      description: `${client.bot_emojis.error} | There is nothing in the queue right now!`,
     },
    });
   }
   if (queue.songs.length !== 0) {
    if (queue.connection.dispatcher) {
     queue.connection.dispatcher.end();
     message.lineReply({
      embed: {
       color: 4779354,
       description: `${client.bot_emojis.skip} | Skipped the music`,
      },
     });
    } else {
     message.lineReply({
      embed: {
       color: 16734039,
       description: `${client.bot_emojis.error} | Error, cannot skip music!`,
      },
     });
    }
   }
  } catch (err) {
   console.log(err);
   message.lineReply({
    embed: {
     color: 16734039,
     description: `Something went wrong... ${client.bot_emojis.sadness}`,
    },
   });
  }
 },
};
