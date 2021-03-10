const Commando = require('discord.js-commando');

module.exports = class KickCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'kick',
            group: 'moderation',
            memberName: 'kick',
            description: 'Kicks a member from the server',
            clientPermissions: ['KICK_MEMBERS'],
            userPermissions: ['KICK_MEMBERS'],
            argsType: 'multiple',
            argsCount: 2
        })
    }

    async run(message, args) {
        const target = message.mentions.users.first();

        var arg1 = `<@!${target.id}>`
        if (arg1 === args[0]) { args.shift(); }
        if (!args.length) { var reason = 'No reason specified'; }
        else { reason = args[0] }

        if (!target) {
            message.reply('Please mention the user to kick.');
            return;
        }

        const { guild } = message;
        const member = guild.members.cache.get(target.id);
        if (member.kickable) {
            member.kick(reason);
            message.channel.send(`I have kicked \`${target.tag}\` | ${reason}`);
        } else {
            message.reply('I cannot kick that user.');
        }
    }
}