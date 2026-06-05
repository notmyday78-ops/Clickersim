import { SlashCommandBuilder, PermissionFlagsBits, ChannelType } from 'discord.js';

const ROLES = [
  { name: '👑 Owner',            color: '#FFD700', hoist: true  },
  { name: '⚙️ Co-Owner',         color: '#FFA500', hoist: true  },
  { name: '🛡️ Head Admin',       color: '#FF4500', hoist: true  },
  { name: '🔨 Admin',            color: '#FF6347', hoist: true  },
  { name: '🔧 Senior Mod',       color: '#FF8C00', hoist: true  },
  { name: '🛠️ Moderator',        color: '#FFA07A', hoist: true  },
  { name: '👁️ Trial Mod',        color: '#FFB347', hoist: true  },
  { name: '🤖 Bot Manager',      color: '#9B59B6', hoist: true  },
  { name: '💻 Developer',        color: '#3498DB', hoist: true  },
  { name: '🎨 Designer',         color: '#1ABC9C', hoist: true  },
  { name: '📢 Event Manager',    color: '#E74C3C', hoist: true  },
  { name: '📰 Media Team',       color: '#E91E63', hoist: true  },
  { name: '💰 Partner Manager',  color: '#00BCD4', hoist: false },
  { name: '💎 Premium Client',   color: '#FFD700', hoist: true  },
  { name: '🏆 VIP Client',       color: '#C0C0C0', hoist: true  },
  { name: '✅ Verified Client',   color: '#2ECC71', hoist: true  },
  { name: '🛒 Client',           color: '#27AE60', hoist: false },
  { name: '🔔 Newsletter',       color: '#8BC34A', hoist: false },
  { name: '🌟 Legend',           color: '#FF1744', hoist: true  },
  { name: '💫 Elite',            color: '#FF6D00', hoist: true  },
  { name: '🔥 Pro',              color: '#FFAB00', hoist: false },
  { name: '⭐ Regular',          color: '#64DD17', hoist: false },
  { name: '🌱 Member',           color: '#00B0FF', hoist: false },
  { name: '👋 New Member',       color: '#757575', hoist: false },
  { name: '🤖 Bots',             color: '#607D8B', hoist: true  },
  { name: '🎉 Giveaway Winner',  color: '#E040FB', hoist: false },
  { name: '🤝 Partner',          color: '#00BCD4', hoist: false },
  { name: '🎭 Event Ping',       color: '#F44336', hoist: false },
  { name: '📣 Announcement Ping',color: '#03A9F4', hoist: false },
  { name: '🔕 Do Not Ping',      color: '#9E9E9E', hoist: false },
  ...Array.from({ length: 70 }, (_, i) => ({
    name: `Level ${i + 1}`,
    color: '#36393F',
    hoist: false,
  })),
];

const CATEGORIES = [
  {
    name: '📌 INFORMATION',
    channels: [
      { name: '👋・welcome',          type: ChannelType.GuildText },
      { name: '📜・rules',            type: ChannelType.GuildText },
      { name: '📢・announcements',    type: ChannelType.GuildText },
      { name: '🗺️・roadmap',          type: ChannelType.GuildText },
      { name: '📰・changelog',        type: ChannelType.GuildText },
      { name: '🤝・partnerships',     type: ChannelType.GuildText },
      { name: '🎭・role-select',      type: ChannelType.GuildText },
    ],
  },
  {
    name: '🤖 BOT SHOWCASE',
    channels: [
      { name: '🤖・our-bots',         type: ChannelType.GuildText },
      { name: '💰・pricing',          type: ChannelType.GuildText },
      { name: '📦・portfolio',        type: ChannelType.GuildText },
      { name: '⭐・reviews',          type: ChannelType.GuildText },
      { name: '🏷️・free-bots',        type: ChannelType.GuildText },
      { name: '🔥・featured-bots',    type: ChannelType.GuildText },
    ],
  },
  {
    name: '🛒 ORDER A BOT',
    channels: [
      { name: '📋・how-to-order',     type: ChannelType.GuildText  },
      { name: '🛒・order-here',       type: ChannelType.GuildForum },
      { name: '💬・order-chat',       type: ChannelType.GuildText  },
      { name: '✅・completed-orders', type: ChannelType.GuildText  },
    ],
  },
  {
    name: '🐛 SUPPORT',
    channels: [
      { name: '❓・faq',              type: ChannelType.GuildText  },
      { name: '🐛・bug-reports',      type: ChannelType.GuildForum },
      { name: '🆘・support-ticket',   type: ChannelType.GuildForum },
      { name: '📖・setup-guides',     type: ChannelType.GuildText  },
      { name: '🎬・tutorials',        type: ChannelType.GuildText  },
      { name: '🔧・troubleshoot',     type: ChannelType.GuildText  },
    ],
  },
  {
    name: '📚 DOCUMENTATION',
    channels: [
      { name: '📝・commands-list',    type: ChannelType.GuildText },
      { name: '🔌・api-docs',         type: ChannelType.GuildText },
      { name: '⚙️・config-guide',     type: ChannelType.GuildText },
      { name: '🌐・webhooks-guide',   type: ChannelType.GuildText },
      { name: '🗃️・database-guide',   type: ChannelType.GuildText },
      { name: '🔑・permissions',      type: ChannelType.GuildText },
    ],
  },
  {
    name: '💬 COMMUNITY',
    channels: [
      { name: '🗨️・general',          type: ChannelType.GuildText  },
      { name: '💡・suggestions',      type: ChannelType.GuildForum },
      { name: '🖼️・showcase',         type: ChannelType.GuildText  },
      { name: '🤝・introductions',    type: ChannelType.GuildText  },
      { name: '😂・memes',            type: ChannelType.GuildText  },
      { name: '🎮・gaming',           type: ChannelType.GuildText  },
      { name: '🎵・music',            type: ChannelType.GuildText  },
      { name: '📸・media',            type: ChannelType.GuildText  },
      { name: '🔗・resources',        type: ChannelType.GuildText  },
      { name: '⛓️・off-topic',        type: ChannelType.GuildText  },
    ],
  },
  {
    name: '🎉 EVENTS',
    channels: [
      { name: '📅・upcoming-events',  type: ChannelType.GuildText },
      { name: '🎁・giveaways',        type: ChannelType.GuildText },
      { name: '🏆・contests',         type: ChannelType.GuildText },
      { name: '🤖・hackathon',        type: ChannelType.GuildText },
    ],
  },
  {
    name: '📊 STATS',
    channels: [
      { name: '👥・member-count',     type: ChannelType.GuildVoice },
      { name: '🤖・bot-count',        type: ChannelType.GuildVoice },
      { name: '📦・orders-done',      type: ChannelType.GuildVoice },
      { name: '⭐・total-reviews',    type: ChannelType.GuildVoice },
    ],
  },
  {
    name: '🔒 STAFF ONLY',
    channels: [
      { name: '📋・staff-chat',       type: ChannelType.GuildText },
      { name: '📢・staff-announcements', type: ChannelType.GuildText },
      { name: '🗳️・staff-votes',      type: ChannelType.GuildText },
      { name: '📁・reports-log',      type: ChannelType.GuildText },
      { name: '🔧・bot-testing',      type: ChannelType.GuildText },
      { name: '📝・ban-log',          type: ChannelType.GuildText },
      { name: '👀・audit-log',        type: ChannelType.GuildText },
    ],
  },
  {
    name: '🎙️ VOICE',
    channels: [
      { name: '🔊 General VC',        type: ChannelType.GuildVoice },
      { name: '🎮 Gaming VC',         type: ChannelType.GuildVoice },
      { name: '🎵 Music VC',          type: ChannelType.GuildVoice },
      { name: '💼 Client Meeting',    type: ChannelType.GuildVoice },
      { name: '🔒 Staff VC',          type: ChannelType.GuildVoice },
      { name: '➕ Create VC',         type: ChannelType.GuildVoice },
    ],
  },
];

export default {
  data: new SlashCommandBuilder()
    .setName('server_startup')
    .setDescription('🚀 Sets up the entire server with channels, categories and roles')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  category: 'moderation',

  async execute(interaction, config, client) {
    await interaction.deferReply({ ephemeral: true });

    const guild = interaction.guild;
    let created = { roles: 0, categories: 0, channels: 0 };
    let errors = [];

    await interaction.editReply('⏳ Creating roles...');

    for (const role of ROLES) {
      try {
        const existing = guild.roles.cache.find(r => r.name === role.name);
        if (!existing) {
          await guild.roles.create({
            name: role.name,
            color: role.color,
            hoist: role.hoist,
            mentionable: false,
            reason: 'server_startup command',
          });
          created.roles++;
        }
      } catch (e) {
        errors.push(`Role "${role.name}": ${e.message}`);
      }
    }

    await interaction.editReply(`✅ Roles done (${created.roles} created). Creating channels...`);

    for (const cat of CATEGORIES) {
      try {
        const category = await guild.channels.create({
          name: cat.name,
          type: ChannelType.GuildCategory,
          reason: 'server_startup command',
        });
        created.categories++;

        for (const ch of cat.channels) {
          try {
            await guild.channels.create({
              name: ch.name,
              type: ch.type,
              parent: category.id,
              reason: 'server_startup command',
            });
            created.channels++;
          } catch (e) {
            errors.push(`Channel "${ch.name}": ${e.message}`);
          }
        }
      } catch (e) {
        errors.push(`Category "${cat.name}": ${e.message}`);
      }
    }

    const summary = [
      '🎉 **Server setup complete!**',
      '',
      `✅ Roles created: **${created.roles}**`,
      `✅ Categories created: **${created.categories}**`,
      `✅ Channels created: **${created.channels}**`,
    ];

    if (errors.length > 0) {
      summary.push('', `⚠️ **${errors.length} error(s):**`);
      errors.slice(0, 10).forEach(e => summary.push(`• ${e}`));
      if (errors.length > 10) summary.push(`...and ${errors.length - 10} more`);
    }

    await interaction.editReply(summary.join('\n'));
  },
};
