const { Command } = require('discord.js-commando');

module.exports = class SetStatusCommand extends Command {
    constructor(client){
        super(client, {
            name: 'presence',
            aliases: ['sp', 'setpresence'],
            group: 'misc',
            memberName: 'presence',
            description: 'Sets the presence of the bot',
            ownerOnly: true,
            argsType: 'multiple',
            argsCount: 2,
            examples: ['!setpresence watch your ip address', '!sp listen to !help'],
            throttling: { usages: 2, duration: 60 }
        });
    }

    async run(message, args) {
        var type;
        switch(args[0]) {
            case 'play':
                type = 'PLAYING'
                break;
            case 'watch':
                type = 'WATCHING'
                break;
            case 'listen':
                type = 'LISTENING'
                break;
            default:
                type = 'PLAYING'
        }

        this.client.user.setPresence({
            activity: {
                name: args[1],
                type: type
            }
        })
            .catch((e) => { message.say('There was an error!'); return; });
        message.say(`Set my presence to\nType: \`${type}\`\nName: \`${args[1]}\``);
    }
}