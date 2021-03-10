const path = require('path');
const fs = require('fs');

// const Discord = require('discord.js');
// const client = new Discord.Client();
const Commando = require('discord.js-commando');

const { prefix } = require('../config.json');
const env = require('dotenv').config().parsed;

const mongo = require('./mongo');
const welcome = require('./events/welcome');

const client = new Commando.CommandoClient({
    owner: '713019770949206016',
    commandPrefix: prefix
})

client.on('ready', async () => {
    console.log(`I have logged in as ${client.user.tag}\n`);
    console.log('Connected to the following guilds:');
    client.guilds.cache.forEach(guild => {
        console.log(`${guild.name} (ID: ${guild.id})`);
    });
    client.user.setPresence({ status: 'dnd' });

    await mongo().then(mongoose => {
        try {
            console.log('Connected to mongo');
        } finally {
            mongoose.connection.close();
        }
    })
    welcome(client);

    client.registry
        .registerGroups([
            ['misc', 'Miscellaneous Commands'],
            ['moderation', 'Moderation Commands']
        ])
        .registerCommandsIn(path.join(__dirname, 'cmds'));
});

client.login(env.TOKEN);