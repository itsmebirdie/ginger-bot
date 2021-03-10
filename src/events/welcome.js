const { Message } = require('discord.js');
const mongo = require('../mongo');
const command = require('../command');

module.exports = (client) => {
    command(client, 'setwelcome', message => {
        const { member, channel, content } = message;
        if (!member.hasPermissions('ADMINISTRATOR')) { channel.reply('You do not have permissions to run this command!'); return; }
        
    });

    client.on('guildMemberAdd', (member) => {
        const server = member.guild.id;
        const { serverName } =require(`../../config/${server}.json`);

        member.send(`Welcome to ${serverName}! DM me with \`!verify\` to start the verification process and gain access to the server!`)
    })
}