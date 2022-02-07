const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = class GitHubCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'github',
      aliases: ['gh', 'repo'],
      usage: 'github',
      description: 'Displays the link to Universe\'s GitHub repository.',
      type: client.types.INFO
    });
  }
  run(message) {
    const embed = new MessageEmbed()
      .setTitle('GitHub Link')
      .setThumbnail('https://i.postimg.cc/d1MG7g8r/circle.png')
      .setDescription(oneLine`
        Click [here](https://github.com/allaboutishaan/Universe) to to visit my GitHub repository!
        Please support me by starring ⭐ the repo, and feel free to comment about issues or suggestions!
      `)
      .addField('Other Links',
        '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=937468595032694824&permissions=8&scope=bot) | ' +
        '[Support Server](https://discord.gg/WM3Se5XGmU)**'
      )
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
