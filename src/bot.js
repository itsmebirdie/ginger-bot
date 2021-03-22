require('module-alias/register');
const path = require('path');
const fs = require('fs');
const Commando = require('discord.js-commando');

const { prefix, owners } = require('@root/config.json');
require('dotenv').config();

const client = new Commando.CommandoClient({
    owner: owners,
    commandPrefix: prefix,
    invite: 'https://discord.gg/X7z4cSfbnx'
})

client.on('ready', async () => {
    console.log(`I have logged in as ${client.user.tag}\n`);
    console.log('Connected to the following guilds:');
    client.guilds.cache.forEach(guild => {
        console.log(`${guild.name} (ID: ${guild.id})`);
    });
    console.log();

    client.registry
        .registerGroups([
            ['util', 'Utility Commands'],
            ['moderation', 'Moderation Commands'],
            ['misc', 'Miscellaneous Commands']
        ])
        .registerCommandsIn(path.join(__dirname, 'cmds'));
});

client.on('error', console.error);

client.login(process.env.TOKEN);