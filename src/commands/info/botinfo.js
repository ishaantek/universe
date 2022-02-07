const Command = require('../Command.js');
const { MessageEmbed } = require('discord.js');
const pkg = require(__basedir + '/package.json');
const { owner } = require('../../utils/emojis.json');
const { oneLine, stripIndent } = require('common-tags');

module.exports = class BotInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'botinfo',
      aliases: ['bot', 'bi'],
      usage: 'botinfo',
      description: 'Fetches Universe\'s bot information.',
      type: client.types.INFO
    });
  }
  run(message) {
    const botOwner = message.client.users.cache.get(message.client.ownerId);
    const prefix = message.client.db.settings.selectPrefix.pluck().get(message.guild.id);
    const tech = stripIndent`
      Version     :: ${pkg.version}
      Library     :: Discord.js v12.3.1
      Environment :: Node.js v12.16.3
      Database    :: SQLite
    `;
    const embed = new MessageEmbed()
      .setTitle('Universe\'s Bot Information')
      .setDescription(oneLine`
        Universe is an open source, fully customizable Discord bot that is constantly growing.
        It comes packaged with a variety of commands and a multitude of settings that can be tailored to your server's specific needs. 
        It's codebase also serves as a base framework to easily create Discord bots of all kinds.
        Universe first went live on **February 5th, 2022.**.
      `)
      .addField('Prefix', `\`${prefix}\``, true)
      .addField('Client ID', `\`${message.client.user.id}\``, true)
      .addField(`Developer ${owner}`, botOwner, true)
      .addField('Tech', `\`\`\`asciidoc\n${tech}\`\`\``)
      .addField(
        'Links', 
               '**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=937468595032694824&permissions=8&scope=bot) | ' +
        '[Support Server](https://discord.gg/WM3Se5XGmU) | ' +
        '[Repository](https://github.com/allaboutishaan/Universe)**'
      )
      .setImage('https://i.postimg.cc/50qnq8qP/banner.png')
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
