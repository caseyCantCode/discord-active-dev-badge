const { Client } = require("discord.js");
const client = new Client({ intents: ["Guilds"] });

client.on("ready", (client) => {
  console.log("bot is ready");

  client.application.commands.set([
    {
      name: "get-badge",
      description: "Get the badge",
      options: [],
    },
  ]);
});

client.login("");
