const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require('discord.js');

// ── CONFIGURATION ─────────────────────────────────────────────────────────────
const ROLES = [
  // Staff
  { name: '👑 Owner',           color: '#FFD700', hoist: true,  position: 100 },
  { name: '⚙️ Co-Owner',        color: '#FFA500', hoist: true,  position: 99  },
  { name: '🛡️ Head Admin',      color: '#FF4500', hoist: true,  position: 95  },
  { name: '🔨 Admin',           color: '#FF6347', hoist: true,  position: 90  },
  { name: '🔧 Senior Mod',      color: '#FF8C00', hoist: true,  position: 85  },
  { name: '🛠️ Moderator',       color: '#FFA07A', hoist: true,  position: 80  },
  { name: '👁️ Trial Mod',       color: '#FFB347', hoist: true,  position: 75  },
  { name: '🤖 Bot Manager',     color: '#9B59B6', hoist: true,  position: 70  },
  { name: '💻 Developer',       color: '#3498DB', hoist: true,  position: 65  },
  { name: '🎨 Designer',        color: '#1ABC9C', hoist: true,  position: 60  },
  { name: '📢 Event Manager',   color: '#E74C3C', hoist: true,  position: 55  },
  { name: '📰 Media Team',      color: '#E91E63', hoist: true,  position: 50  },
  { name: '💰 Partner Manager', color: '#00BCD4', hoist: false, position: 45  },
  // Customers / Clients
  { name: '💎 Premium Client',  color: '#FFD700', hoist: true,  position: 40  },
  { name: '🏆 VIP Client',      color: '#C0C0C0', hoist: true,  position: 38  },
  { name: '✅ Verified Client',  color: '#2ECC71', hoist: true,  position: 36  },
  { name: '🛒 Client',          color: '#27AE60', hoist: false, position: 34  },
  { name: '🔔 Newsletter',      color: '#8BC34A', hoist: false, position: 30  },
  // Community tiers
  { name: '🌟 Legend',         color: '#FF1744', hoist: true,  position: 28  },
  { name: '💫 Elite',          color: '#FF6D00', hoist: true,  position: 26  },
  { name: '🔥 Pro',            color: '#FFAB00', hoist: false, position: 24  },
  { name: '⭐ Regular',        color: '#64DD17', hoist: false, position: 22  },
  { name: '🌱 Member',         color: '#00B0FF', hoist: false, position: 20  },
  { name: '👋 New Member',     color: '#757575', hoist: false, position: 18  },
  // Bots
  { name: '🤖 Bots',           color: '#607D8B', hoist: true,  position: 10  },
  // Special
  { name: '🎉 Giveaway Winner', color: '#E040FB', hoist: false, position: 8   },
  { name: '🤝 Partner',         color: '#00BCD4', hoist: false, position: 6   },
  { name: '🎭 Event Ping',      color: '#F44336', hoist: false, position: 4   },
  { name: '📣 Announcement Ping',color: '#03A9F4', hoist: false, position: 3  },
  { name: '🔕 Do Not Ping',    color: '#9E9E9E', hoist: false, position: 2   },
  // 70 more auto-generated level roles
  ...Array.from({ length: 70 }, (_, i) => ({
    name: `Level ${i + 1}`,
    color: '#36393F',
    hoist: false,
    position: 0,
  })),
];

const CATEGORIES = [
  {
    name: '📌 INFORMATION',
    channels: [
      { name: '👋・welcome',         type: ChannelType.GuildText, topic: 'Welcome to the server!' },
      { name: '📜・rules',           type: ChannelType.GuildText, topic: 'Server rules' },
      { name: '📢・announcements',   type: ChannelType.GuildText, topic: 'Server announcements' },
      { name: '🗺️・roadmap',         type: ChannelType.GuildText, topic: 'Upcoming features and plans' },
      { name: '📰・changelog',       type: ChannelType.GuildText, topic: 'What has changed' },
      { name: '🤝・partnerships',    type: ChannelType.GuildText, topic: 'Our partners' },
      { name: '🎭・role-select',     type: ChannelType.GuildText, topic: 'Pick your roles here' },
    ],
  },
  {
    name: '🤖 BOT SHOWCASE',
    channels: [
      { name: '🤖・our-bots',        type: ChannelType.GuildText, topic: 'List of all our bots' },
      { name: '💰・pricing',         type: ChannelType.GuildText, topic: 'Bot pricing and plans' },
      { name: '📦・portfolio',       type: ChannelType.GuildText, topic: 'Examples of past work' },
      { name: '⭐・reviews',         type: ChannelType.GuildText, topic: 'Client reviews' },
      { name: '🏷️・free-bots',       type: ChannelType.GuildText, topic: 'Free bots available' },
      { name: '🔥・featured-bots',   type: ChannelType.GuildText, topic: 'Top bots this month' },
    ],
  },
  {
    name: '🛒 ORDER A BOT',
    channels: [
      { name: '📋・how-to-order',    type: ChannelType.GuildText,  topic: 'How to order a custom bot' },
      { name: '🛒・order-here',      type: ChannelType.GuildForum, topic: 'Create a new order ticket' },
      { name: '💬・order-chat',      type: ChannelType.GuildText,  topic: 'Discuss your order' },
      { name: '✅・completed-orders',type: ChannelType.GuildText,  topic: 'Completed deliveries' },
    ],
  },
  {
    name: '🐛 SUPPORT',
    channels: [
      { name: '❓・faq',             type: ChannelType.GuildText,  topic: 'Frequently asked questions' },
      { name: '🐛・bug-reports',     type: ChannelType.GuildForum, topic: 'Report a bug in one of our bots' },
      { name: '🆘・support-ticket',  type: ChannelType.GuildForum, topic: 'Open a support ticket' },
      { name: '📖・setup-guides',    type: ChannelType.GuildText,  topic: 'Bot setup guides' },
      { name: '🎬・tutorials',       type: ChannelType.GuildText,  topic: 'Video and written tutorials' },
      { name: '🔧・troubleshoot',    type: ChannelType.GuildText,  topic: 'Troubleshooting common issues' },
    ],
  },
  {
    name: '📚 DOCUMENTATION',
    channels: [
      { name: '📝・commands-list',   type: ChannelType.GuildText, topic: 'All available commands' },
      { name: '🔌・api-docs',        type: ChannelType.GuildText, topic: 'API documentation' },
      { name: '⚙️・config-guide',    type: ChannelType.GuildText, topic: 'Configuration guide' },
      { name: '🌐・webhooks-guide',  type: ChannelType.GuildText, topic: 'Webhook setup guide' },
      { name: '🗃️・database-guide',  type: ChannelType.GuildText, topic: 'Database setup guide' },
      { name: '🔑・permissions',     type: ChannelType.GuildText, topic: 'Permissions reference' },
    ],
  },
  {
    name: '💬 COMMUNITY',
    channels: [
      { name: '🗨️・general',         type: ChannelType.GuildText, topic: 'General chat' },
      { name: '💡・suggestions',     type: ChannelType.GuildForum, topic: 'Suggest new features' },
      { name: '🖼️・showcase',        type: ChannelType.GuildText, topic: 'Show off your bots and projects' },
      { name: '🤝・introductions',   type: ChannelType.GuildText, topic: 'Introduce yourself' },
      { name: '😂・memes',           type: ChannelType.GuildText, topic: 'Memes and fun' },
      { name: '🎮・gaming',          type: ChannelType.GuildText, topic: 'Gaming chat' },
      { name: '🎵・music',           type: ChannelType.GuildText, topic: 'Music chat' },
      { name: '📸・media',           type: ChannelType.GuildText, topic: 'Post images and videos' },
      { name: '🔗・resources',       type: ChannelType.GuildText, topic: 'Useful resources and links' },
      { name: '⛓️・off-topic',       type: ChannelType.GuildText, topic: 'Off-topic conversation' },
    ],
  },
  {
    name: '🎉 EVENTS',
    channels: [
      { name: '📅・upcoming-events', type: ChannelType.GuildText, topic: 'Upcoming events' },
      { name: '🎁・giveaways',       type: ChannelType.GuildText, topic: 'Active giveaways' },
      { name: '🏆・contests',        type: ChannelType.GuildText, topic: 'Contests and competitions' },
      { name: '🤖・hackathon',       type: ChannelType.GuildText, topic: 'Bot building hackathons' },
    ],
  },
  {
    name: '📊 STATS',
    channels: [
      { name: '👥・member-count',    type: ChannelType.GuildVoice },
      { name: '🤖・bot-count',       type: ChannelType.GuildVoice },
      { name: '📦・orders-done',     type: ChannelType.GuildVoice },
      { name: '⭐・total-reviews',   type: ChannelType.GuildVoice },
    ],
  },
  {
    name: '🔒 STAFF ONLY',
    channels: [
      { name: '📋・staff-chat',      type: ChannelType.GuildText, topic: 'Staff general chat' },
      { name: '📢・staff-announcements', type: ChannelType.GuildText, topic: 'Staff announcements' },
      { name: '🗳️・staff-votes',     type: ChannelType.GuildText, topic: 'Staff voting' },
      { name: '📁・reports-log',     type: ChannelType.GuildText, topic: 'Moderation log' },
      { name: '🔧・bot-testing',     type: ChannelType.GuildText, topic: 'Test bot commands here' },
      { name: '📝・ban-log',         type: ChannelType.GuildText, topic: 'Ban and kick log' },
      { name: '👀・audit-log',       type: ChannelType.GuildText, topic: 'Server audit log' },
    ],
  },
  {
    name: '🎙️ VOICE',
    channels: [
      { name: '🔊 General VC',       type: ChannelType.GuildVoice },
      { name: '🎮 Gaming VC',        type: ChannelType.GuildVoice },
      { name: '🎵 Music VC',         type: ChannelType.GuildVoice },
      { name: '💼 Client Meeting',   type: ChannelType.GuildVoice },
      { name: '🔒 Staff VC',         type: ChannelType.GuildVoice },
      { name: '➕ Create VC',        type: ChannelType.GuildVoice },
    ],
  },
];

// ── COMMAND DEFINITION ────────────────────────────────────────────────────────
module.exports = {
  data: new SlashCommandBuilder()
    .setName('server_startup')
    .setDescription('🚀 Sets up the entire server with channels, categories and roles')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guild = interaction.guild;
    let created = { roles: 0, categories: 0, channels: 0 };
    let errors = [];

    // ── STEP 1: CREATE ROLES ─────────────────────────────────────────────────
    await interaction.editReply('⏳ Creating roles... (0%)');

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

    // ── STEP 2: CREATE CATEGORIES + CHANNELS ────────────────────────────────
    await interaction.editReply(`✅ Roles done (${created.roles} created). Creating channels...`);

    for (const cat of CATEGORIES) {
      try {
        // Create category
        const category = await guild.channels.create({
          name: cat.name,
          type: ChannelType.GuildCategory,
          reason: 'server_startup command',
        });
        created.categories++;

        // Create channels inside category
        for (const ch of cat.channels) {
          try {
            await guild.channels.create({
              name: ch.name,
              type: ch.type,
              parent: category.id,
              topic: ch.topic || '',
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

    // ── STEP 3: DONE ─────────────────────────────────────────────────────────
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
