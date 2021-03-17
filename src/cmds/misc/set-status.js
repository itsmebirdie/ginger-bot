const { Command } = require('discord.js-commando');

module.exports = class SetStatusCommand extends Command {
    constructor(client){
        super(client, {
            name: 'status',
            aliases: ['ss', 'setstatus'],
            group: 'misc',
            memberName: 'status',
            description: 'Sets the status of the bot',
            ownerOnly: true,
            examples: ['!status dnd', '!ss idle'],
            throttling: { usages: 2, duration: 60 }
        });
    }

    run(message, args) {
        this.client.user.setStatus(args.toString().toLowerCase())
            .catch((e) => { message.say('There was an error!'); return; });
        message.say(`Set my status to \`${args}\``)
    }
}