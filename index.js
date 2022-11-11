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

client.on("interactionCreate", async (interaction) => {
  await interaction.deferReply();

  if (interaction.commandName === "get-badge") {
    interaction.followUp(
      "Congrats you got the badge. Go back to the repo and follow the rest of the instructions"
    );
  }
});

client.login("");
