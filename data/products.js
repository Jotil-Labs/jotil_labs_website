export const products = [
  {
    slug: 'receptionist',
    name: 'JotilReceptionist',
    displayName: ['Jotil', 'Receptionist'],
    tagline: 'Your AI Front Desk. Never Miss a Call Again',
    badge: 'Inbound Voice',
    description:
      'AI-powered inbound voice agent that answers, qualifies, and routes every call with human-like conversation. Available 24/7 with zero hold times.',
    heroDescription:
      'Stop losing customers to voicemail. JotilReceptionist answers every call instantly with natural AI conversation, qualifies leads, books appointments, and routes urgent calls to your team. All without hiring additional staff.',
    accentType: 'waveform',
    services: [
      {
        name: 'AI Phone Receptionist',
        description:
          'Handles inbound calls with natural language understanding, qualifies callers, captures lead information, and routes calls intelligently based on intent.',
        features: [
          'Natural language understanding for caller intent',
          '24/7 call handling without hold times',
          'Intelligent call routing and escalation',
          'Real-time call transcription and summaries',
        ],
      },
      {
        name: 'AI Web Voicebot',
        description:
          'Voice-first web interactions. Visitors speak naturally on your website and get instant, intelligent responses through browser-based voice AI.',
        features: [
          'Browser-based voice interaction',
          'Real-time speech-to-text processing',
          'Multi-language voice support',
          'Accessible alternative to text chat',
        ],
      },
    ],
    features: [
      { icon: 'Phone', title: 'Natural Conversations', description: 'Human-like voice AI that handles complex dialogues naturally' },
      { icon: 'Clock', title: '24/7 Availability', description: 'Never miss a call, even outside business hours' },
      { icon: 'GitBranch', title: 'Smart Routing', description: 'Route calls based on intent, urgency, and availability' },
      { icon: 'FileText', title: 'Live Transcription', description: 'Real-time transcripts and AI-generated call summaries' },
      { icon: 'Languages', title: 'Multilingual', description: 'Support callers in multiple languages automatically' },
      { icon: 'BarChart3', title: 'Call Analytics', description: 'Track volume, resolution rates, and caller sentiment' },
    ],
    integrations: ['Twilio', 'Google Calendar', 'HubSpot', 'Salesforce', 'Slack'],
    pricing: {
      type: 'tiers',
      tiers: [
        { name: 'Starter', price: '$99', period: '/mo', description: 'Up to 200 minutes', features: ['200 AI call minutes', '1 phone number', 'Basic call routing', 'Email summaries'] },
        { name: 'Professional', price: '$299', period: '/mo', description: 'Up to 1,000 minutes', features: ['1,000 AI call minutes', '3 phone numbers', 'Advanced routing rules', 'CRM integration', 'Live transfer'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', period: '', description: 'Unlimited scale', features: ['Unlimited minutes', 'Unlimited numbers', 'Custom AI training', 'Dedicated support', 'SLA guarantee'] },
      ],
    },
    faq: [
      { question: 'How natural does the AI voice sound?', answer: 'Our AI uses the latest voice synthesis technology to deliver conversations that are nearly indistinguishable from human agents. Callers often don\'t realize they\'re speaking with AI.' },
      { question: 'Can it handle complex call scenarios?', answer: 'Yes. The AI understands context, handles multi-turn conversations, asks clarifying questions, and knows when to escalate to a human agent.' },
      { question: 'How quickly can I get set up?', answer: 'Most businesses are live within a few hours. We handle the phone number provisioning and AI configuration.' },
      { question: 'What happens if the AI can\'t handle a call?', answer: 'The AI seamlessly transfers the call to your team with a full context summary, so the human agent can pick up right where the AI left off.' },
    ],
  },
  {
    slug: 'messenger',
    name: 'JotilMessenger',
    displayName: ['Jotil', 'Messenger'],
    tagline: 'Conversational AI Across Every Text Channel',
    badge: 'Inbound Text',
    description:
      'AI chatbot and SMS agent that engages customers across web chat, WhatsApp, SMS, and more. Qualifying leads and answering questions 24/7.',
    heroDescription:
      'Meet your customers where they are. JotilMessenger delivers intelligent, context-aware conversations across web chat, SMS, WhatsApp, and Teams. Capturing leads, answering questions, and booking appointments automatically.',
    accentType: 'dots-outlined',
    services: [
      {
        name: 'AI Web Chatbot',
        description:
          'Convert website visitors into customers with an AI chatbot that understands context, provides real answers, and captures lead information.',
        features: [
          'Context-aware multi-turn conversations',
          'Lead capture and qualification',
          'Seamless handoff to human agents',
          'Custom training on your business data',
        ],
      },
      {
        name: 'SMS Texting Agent',
        description:
          'Automated SMS conversations that feel personal. Follow up, confirm appointments, and close deals via text.',
        features: [
          'Two-way conversational SMS',
          'Appointment reminders and confirmations',
          'Automated follow-up sequences',
          'A2P 10DLC compliant messaging',
        ],
      },
    ],
    features: [
      { icon: 'MessageSquare', title: 'Omnichannel', description: 'One AI brain powering web chat, SMS, WhatsApp, and Teams' },
      { icon: 'Brain', title: 'Context-Aware', description: 'Remembers conversation history and customer context' },
      { icon: 'UserCheck', title: 'Lead Qualification', description: 'Automatically scores and qualifies leads mid-conversation' },
      { icon: 'ArrowRightLeft', title: 'Human Handoff', description: 'Seamlessly transfer to live agents with full context' },
      { icon: 'Database', title: 'Custom Training', description: 'Train on your docs, FAQs, and business data' },
      { icon: 'Shield', title: 'TCPA Compliant', description: 'Built-in opt-in/opt-out and consent management' },
    ],
    integrations: ['Twilio', 'WhatsApp', 'Slack', 'Microsoft Teams', 'HubSpot'],
    pricing: {
      type: 'tiers',
      tiers: [
        { name: 'Starter', price: '$79', period: '/mo', description: 'Web chat + basic SMS', features: ['Web chatbot', '500 SMS messages', '1 trained knowledge base', 'Basic analytics'] },
        { name: 'Professional', price: '$249', period: '/mo', description: 'Multi-channel AI', features: ['All channels (web, SMS, WhatsApp)', '5,000 messages', 'Advanced AI training', 'CRM integration', 'Custom branding'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', period: '', description: 'Full platform', features: ['Unlimited messages', 'All channels', 'Custom AI models', 'API access', 'Dedicated support'] },
      ],
    },
    faq: [
      { question: 'Can the chatbot learn from my existing content?', answer: 'Yes. Upload your website content, FAQs, product docs, and knowledge base articles. The AI trains on your specific business context.' },
      { question: 'How does SMS compliance work?', answer: 'We handle A2P 10DLC registration, opt-in consent management, and STOP keyword processing automatically.' },
      { question: 'Can it handle multiple languages?', answer: 'Yes. The AI supports 50+ languages and can detect and respond in the customer\'s preferred language automatically.' },
    ],
  },
  {
    slug: 'outreach',
    name: 'JotilOutreach',
    displayName: ['Jotil', 'Outreach'],
    tagline: 'AI-Powered Outbound Campaigns at Scale',
    badge: 'Outbound',
    description:
      'Automated outbound calls and SMS campaigns that sound natural, adapt to conversations, and drive results. All at scale.',
    heroDescription:
      'Scale your outreach without scaling your team. JotilOutreach deploys AI-powered phone calls and SMS campaigns that feel personal, adapt to each conversation in real time, and drive measurable results.',
    accentType: 'planes',
    services: [
      {
        name: 'Automated Calls',
        description:
          'Scale outreach with AI-powered calls that sound natural and adapt to each conversation in real time.',
        features: [
          'Human-like voice synthesis',
          'Dynamic conversation scripting',
          'Call outcome tracking and analytics',
          'Do-not-call list compliance',
        ],
      },
      {
        name: 'Automated SMS',
        description:
          'Reach customers at scale with personalized, automated text campaigns that drive engagement and action.',
        features: [
          'Personalized message templates',
          'Intelligent send-time optimization',
          'Campaign analytics and A/B testing',
          'Opt-in/opt-out management',
        ],
      },
    ],
    features: [
      { icon: 'Zap', title: 'Campaign Builder', description: 'Design multi-step outbound campaigns with drag-and-drop' },
      { icon: 'Users', title: 'List Management', description: 'Import, segment, and manage contact lists with smart filters' },
      { icon: 'Target', title: 'A/B Testing', description: 'Test scripts, timing, and messaging to optimize conversion' },
      { icon: 'TrendingUp', title: 'Real-Time Analytics', description: 'Track connection rates, outcomes, and ROI in real time' },
      { icon: 'ShieldCheck', title: 'DNC Compliance', description: 'Automatic do-not-call list scrubbing and TCPA compliance' },
      { icon: 'RefreshCw', title: 'Smart Retry', description: 'Intelligent retry logic based on time zones and answer patterns' },
    ],
    integrations: ['Twilio', 'Salesforce', 'HubSpot', 'Zapier', 'Google Sheets'],
    pricing: {
      type: 'tiers',
      tiers: [
        { name: 'Starter', price: '$149', period: '/mo', description: 'Small campaigns', features: ['500 outbound calls', '2,000 SMS', 'Basic campaign builder', 'Standard analytics'] },
        { name: 'Professional', price: '$399', period: '/mo', description: 'Growth campaigns', features: ['2,500 outbound calls', '10,000 SMS', 'A/B testing', 'Advanced analytics', 'CRM sync'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', period: '', description: 'Unlimited outreach', features: ['Unlimited volume', 'Custom AI scripts', 'Dedicated calling infrastructure', 'Priority support', 'Custom integrations'] },
      ],
    },
    faq: [
      { question: 'Is this robocalling?', answer: 'No. JotilOutreach uses conversational AI that adapts to each call in real time. It\'s a two-way conversation, not a pre-recorded message.' },
      { question: 'How do you handle compliance?', answer: 'We integrate DNC list checking, time-zone aware calling windows, TCPA consent verification, and automatic opt-out processing.' },
      { question: 'What conversion rates can I expect?', answer: 'Clients typically see 2-5x improvement over traditional outbound methods, with significantly lower cost per conversation.' },
    ],
  },
  {
    slug: 'space',
    name: 'JotilSpace',
    displayName: ['Jotil', 'Space'],
    tagline: 'Your Team\'s Unified AI Workspace',
    badge: 'Multi-AI Platform',
    description:
      'A unified workspace where your team manages customer relationships, tickets, and calendars. All powered by AI.',
    heroDescription:
      'Stop switching between tools. JotilSpace brings your CRM, ticketing system, and calendar into one AI-powered workspace. Automatically logging interactions, scoring leads, and managing your team\'s workflow.',
    accentType: 'shapes',
    services: [
      {
        name: 'AI CRM',
        description:
          'A CRM that works for you. Automatically logs interactions from all channels, scores leads, and suggests next actions.',
        features: [
          'Automatic interaction logging from all channels',
          'AI-powered lead scoring and prioritization',
          'Smart follow-up recommendations',
          'Pipeline analytics and forecasting',
        ],
      },
      {
        name: 'Smart Ticketing',
        description:
          'Intelligent ticket routing and resolution. AI categorizes, prioritizes, and resolves common issues automatically.',
        features: [
          'Auto-categorization and priority assignment',
          'AI-suggested responses for common issues',
          'SLA tracking and escalation rules',
          'Customer sentiment analysis',
        ],
      },
      {
        name: 'AI Calendar',
        description:
          'Scheduling without the back-and-forth. AI handles availability, bookings, and reminders across your team.',
        features: [
          'Natural language scheduling via voice or chat',
          'Multi-calendar availability sync',
          'Automated reminders and rescheduling',
          'Time zone intelligent booking',
        ],
      },
    ],
    features: [
      { icon: 'LayoutDashboard', title: 'Unified Dashboard', description: 'See all customer interactions, tickets, and tasks in one place' },
      { icon: 'Sparkles', title: 'AI Suggestions', description: 'Get smart recommendations for follow-ups and next actions' },
      { icon: 'PieChart', title: 'Pipeline Analytics', description: 'Forecast revenue and track deal progression with AI insights' },
      { icon: 'Bell', title: 'Smart Alerts', description: 'Get notified about at-risk deals, overdue tickets, and opportunities' },
      { icon: 'Link', title: 'Deep Integration', description: 'Connects natively with all Jotil products and 50+ third-party tools' },
      { icon: 'Lock', title: 'Role-Based Access', description: 'Control who sees what with granular permission management' },
    ],
    integrations: ['Google Calendar', 'Microsoft 365', 'Slack', 'Salesforce', 'HubSpot', 'Jira'],
    pricing: {
      type: 'tiers',
      tiers: [
        { name: 'Team', price: '$49', period: '/user/mo', description: 'Up to 10 users', features: ['CRM + Ticketing', 'AI Calendar', 'Basic analytics', 'Email integration'] },
        { name: 'Business', price: '$99', period: '/user/mo', description: 'Unlimited users', features: ['All Team features', 'Advanced AI insights', 'Custom pipelines', 'API access', 'Priority support'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', period: '', description: 'Custom deployment', features: ['All Business features', 'Custom AI training', 'Dedicated instance', 'SSO/SAML', 'SLA guarantee'] },
      ],
    },
    faq: [
      { question: 'Can I import data from my current CRM?', answer: 'Yes. We support imports from Salesforce, HubSpot, Pipedrive, and CSV files. Our team assists with data migration.' },
      { question: 'Does it integrate with Jotil voice and chat products?', answer: 'Absolutely. All Jotil products feed data directly into JotilSpace. Call logs, chat transcripts, and SMS history appear automatically in the CRM.' },
      { question: 'How is this different from Salesforce?', answer: 'JotilSpace is built AI-first. Instead of adding AI as an afterthought, every feature is designed around AI-powered automation and intelligence.' },
    ],
  },
  {
    slug: 'flow',
    name: 'JotilFlow',
    displayName: ['Jotil', 'Flow'],
    tagline: 'Custom Workflow Automation Engine',
    badge: 'Automation',
    description:
      'Build custom automation workflows that connect your tools, trigger actions, and eliminate manual work, with AI intelligence built in.',
    heroDescription:
      'Automate the repetitive. JotilFlow lets you design custom workflows that connect your tools, trigger actions based on events, and use AI to make intelligent decisions. Eliminating manual work and human error.',
    accentType: 'flow',
    services: [
      {
        name: 'AI Automation',
        description:
          'End-to-end workflow automation tailored to your business. Connect systems, eliminate manual work, and scale operations.',
        features: [
          'Custom workflow design and implementation',
          'Multi-system integration and orchestration',
          'Real-time monitoring and analytics',
          'Scalable architecture for growing teams',
        ],
      },
      {
        name: 'AI Consultancy',
        description:
          'Strategic guidance on AI adoption. We assess your operations, identify automation opportunities, and build your roadmap.',
        features: [
          'AI readiness assessment',
          'Custom automation strategy development',
          'Implementation planning and support',
          'Team training and change management',
        ],
      },
    ],
    features: [
      { icon: 'Workflow', title: 'Visual Builder', description: 'Design workflows visually with a drag-and-drop node editor' },
      { icon: 'Plug', title: '50+ Connectors', description: 'Pre-built integrations with popular business tools' },
      { icon: 'Brain', title: 'AI Decision Nodes', description: 'Add AI-powered decision points that analyze data and choose paths' },
      { icon: 'Activity', title: 'Real-Time Monitoring', description: 'Watch workflows execute in real time with detailed logs' },
      { icon: 'GitBranch', title: 'Conditional Logic', description: 'Build complex branching logic with if/then/else conditions' },
      { icon: 'Timer', title: 'Scheduled Triggers', description: 'Run workflows on schedules or trigger them from events' },
    ],
    integrations: ['Zapier', 'Slack', 'Google Sheets', 'Airtable', 'Webhooks', 'REST APIs'],
    pricing: {
      type: 'tiers',
      tiers: [
        { name: 'Starter', price: '$99', period: '/mo', description: 'Simple automations', features: ['10 active workflows', '5,000 executions/mo', 'Basic connectors', 'Email support'] },
        { name: 'Professional', price: '$349', period: '/mo', description: 'Advanced automation', features: ['Unlimited workflows', '50,000 executions/mo', 'AI decision nodes', 'Custom connectors', 'Priority support'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', period: '', description: 'Full platform', features: ['Unlimited everything', 'Custom AI models', 'Dedicated infrastructure', 'Consultancy hours', 'SLA guarantee'] },
      ],
    },
    faq: [
      { question: 'Do I need coding skills?', answer: 'No. The visual builder is designed for non-technical users. For advanced use cases, we offer a scripting option and our consultancy team can build custom workflows for you.' },
      { question: 'What can I automate?', answer: 'Anything with a trigger and an action. Common examples: lead follow-ups, invoice processing, onboarding sequences, data sync, notification routing, and report generation.' },
      { question: 'How does AI Consultancy work?', answer: 'Our team audits your current processes, identifies automation opportunities, prioritizes by ROI, and builds a phased implementation plan. We then help execute it.' },
    ],
  },
  {
    slug: 'avatar',
    name: 'JotilAvatar',
    displayName: ['Jotil', 'Avatar'],
    tagline: 'Face-to-Face AI. Human-Like Digital Assistants',
    badge: 'AI Avatar',
    description:
      'Lifelike AI avatars that represent your brand in video calls, website interactions, and customer-facing touchpoints. Delivering a personal, visual AI experience.',
    heroDescription:
      'Go beyond voice and text. JotilAvatar brings your AI assistant to life with realistic, expressive digital humans that engage customers face-to-face on your website, in video meetings, and across digital touchpoints.',
    accentType: 'avatar',
    services: [
      {
        name: 'Website AI Avatar',
        description:
          'Embed a lifelike AI avatar on your website that greets visitors, answers questions, and guides them through your products with natural speech and facial expressions.',
        features: [
          'Realistic facial expressions and lip sync',
          'Natural conversational AI with visual presence',
          'Custom avatar appearance and branding',
          'Multi-language support with native accents',
        ],
      },
      {
        name: 'Video Meeting Avatar',
        description:
          'AI-powered digital humans that can attend video calls, present information, and interact with participants in real-time.',
        features: [
          'Real-time video call integration',
          'Dynamic presentation capabilities',
          'Context-aware responses during meetings',
          'Screen sharing and visual aid support',
        ],
      },
    ],
    features: [
      { icon: 'User', title: 'Lifelike Presence', description: 'Photorealistic AI avatars with natural expressions and gestures' },
      { icon: 'Video', title: 'Video-Ready', description: 'Deploy on websites, video calls, and kiosks with full video output' },
      { icon: 'Palette', title: 'Brand Customization', description: 'Customize appearance, voice, personality, and attire to match your brand' },
      { icon: 'Globe', title: 'Multilingual', description: 'Speak and respond in 30+ languages with natural lip sync' },
      { icon: 'Brain', title: 'Context-Aware AI', description: 'Powered by advanced LLMs for intelligent, contextual conversations' },
      { icon: 'Shield', title: 'Enterprise Security', description: 'SOC 2 compliant with on-premise deployment options' },
    ],
    integrations: ['Anam AI', 'OpenAI', 'Google Meet', 'Zoom', 'HubSpot', 'Salesforce'],
    pricing: {
      type: 'tiers',
      tiers: [
        { name: 'Starter', price: '$199', period: '/mo', description: 'Website avatar', features: ['1 AI avatar', 'Website embed', '500 interactions/mo', 'Standard appearance', 'Email support'] },
        { name: 'Professional', price: '$499', period: '/mo', description: 'Multi-channel', features: ['3 AI avatars', 'Website + video calls', '2,000 interactions/mo', 'Custom appearance', 'Priority support', 'Analytics dashboard'], highlighted: true },
        { name: 'Enterprise', price: 'Custom', period: '', description: 'Full deployment', features: ['Unlimited avatars', 'All channels + kiosk', 'Unlimited interactions', 'Fully custom avatars', 'Dedicated support', 'On-premise option'] },
      ],
    },
    faq: [
      { question: 'How realistic are the avatars?', answer: 'Our avatars use state-of-the-art neural rendering to produce photorealistic facial expressions, natural lip sync, and lifelike gestures. Most users report the experience feels like talking to a real person.' },
      { question: 'Can I customize the avatar to match my brand?', answer: 'Absolutely. You can customize the avatar\'s appearance, clothing, voice, personality traits, and conversation style to perfectly represent your brand identity.' },
      { question: 'What technology powers the avatars?', answer: 'We use Anam AI for avatar rendering combined with advanced large language models for conversation. The result is a visually engaging AI that can hold natural, intelligent conversations.' },
      { question: 'Does it work on mobile devices?', answer: 'Yes. Our avatars are optimized for web browsers across desktop, tablet, and mobile devices. No app installation required.' },
    ],
  },
]

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)

export const productSlugs = products.map((p) => p.slug)
