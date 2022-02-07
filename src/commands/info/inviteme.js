const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class InviteMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'inviteme',
      aliases: ['invite', 'invme', 'im'],
      usage: 'inviteme',
      description: 'Generates a link you can use to invite Universe to your own server.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('Invite Me')
      .setThumbnail('https://postimg.cc/mcwPJXpg')
      .setDescription(oneLine`
        Click [here](https://discord.com/api/oauth2/authorize?client_id=937468595032694824&permissions=8&scope=bot)
        to invite me to your server!
      `)
      .addField('Other Links', 
        '**[Support Server](https://discord.gg/WM3Se5XGmU) | ' +
        '[Repository](https://github.com/allaboutishaan/Universe)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
