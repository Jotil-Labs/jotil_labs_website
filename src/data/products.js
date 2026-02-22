export const productCategories = [
  {
    id: 'inbound',
    label: 'Inbound Automation',
    products: [
      {
        icon: 'Phone',
        name: 'AI Phone Receptionist',
        description: 'Never miss a call. Our AI answers, qualifies, and routes every inbound call with human-like conversation.',
        features: [
          'Natural language understanding for caller intent',
          '24/7 call handling without hold times',
          'Intelligent call routing and escalation',
          'Real-time call transcription and summaries',
        ],
      },
      {
        icon: 'MessageSquare',
        name: 'AI Web Chatbot',
        description: 'Convert website visitors into customers with an AI chatbot that understands context and provides real answers.',
        features: [
          'Context-aware multi-turn conversations',
          'Lead capture and qualification',
          'Seamless handoff to human agents',
          'Custom training on your business data',
        ],
      },
      {
        icon: 'Mic',
        name: 'AI Web Voicebot',
        description: 'Voice-first web interactions. Let visitors speak naturally and get instant, intelligent responses.',
        features: [
          'Browser-based voice interaction',
          'Real-time speech-to-text processing',
          'Multi-language voice support',
          'Accessible alternative to text chat',
        ],
      },
      {
        icon: 'MessageCircle',
        name: 'SMS Texting Agent',
        description: 'Automated SMS conversations that feel personal. Follow up, confirm appointments, and close deals via text.',
        features: [
          'Two-way conversational SMS',
          'Appointment reminders and confirmations',
          'Automated follow-up sequences',
          'A2P 10DLC compliant messaging',
        ],
      },
    ],
  },
  {
    id: 'lead',
    label: 'Lead Management',
    products: [
      {
        icon: 'Users',
        name: 'AI CRM',
        description: 'A CRM that works for you. Automatically logs interactions, scores leads, and suggests next actions.',
        features: [
          'Automatic interaction logging from all channels',
          'AI-powered lead scoring and prioritization',
          'Smart follow-up recommendations',
          'Pipeline analytics and forecasting',
        ],
      },
      {
        icon: 'Ticket',
        name: 'Smart Ticketing',
        description: 'Intelligent ticket routing and resolution. AI categorizes, prioritizes, and resolves common issues automatically.',
        features: [
          'Auto-categorization and priority assignment',
          'AI-suggested responses for common issues',
          'SLA tracking and escalation rules',
          'Customer sentiment analysis',
        ],
      },
      {
        icon: 'Calendar',
        name: 'AI Calendar',
        description: 'Scheduling without the back-and-forth. AI handles availability, bookings, and reminders across your team.',
        features: [
          'Natural language scheduling via voice or chat',
          'Multi-calendar availability sync',
          'Automated reminders and rescheduling',
          'Time zone intelligent booking',
        ],
      },
    ],
  },
  {
    id: 'outbound',
    label: 'Outbound Engagement',
    products: [
      {
        icon: 'PhoneOutgoing',
        name: 'Automated Calls',
        description: 'Scale your outreach with AI-powered calls that sound natural and adapt to each conversation in real time.',
        features: [
          'Human-like voice synthesis',
          'Dynamic conversation scripting',
          'Call outcome tracking and analytics',
          'Do-not-call list compliance',
        ],
      },
      {
        icon: 'Send',
        name: 'Automated SMS',
        description: 'Reach customers at scale with personalized, automated text campaigns that drive engagement and action.',
        features: [
          'Personalized message templates',
          'Intelligent send-time optimization',
          'Campaign analytics and A/B testing',
          'Opt-in/opt-out management',
        ],
      },
    ],
  },
  {
    id: 'enterprise',
    label: 'Enterprise Solutions',
    products: [
      {
        icon: 'BarChart3',
        name: 'AI Automation',
        description: 'End-to-end workflow automation tailored to your business. Connect systems, eliminate manual work, and scale operations.',
        features: [
          'Custom workflow design and implementation',
          'Multi-system integration and orchestration',
          'Real-time monitoring and analytics',
          'Scalable architecture for growing teams',
        ],
      },
      {
        icon: 'GraduationCap',
        name: 'AI Consultancy',
        description: 'Strategic guidance on AI adoption. We assess your operations, identify opportunities, and build your automation roadmap.',
        features: [
          'AI readiness assessment',
          'Custom automation strategy development',
          'Implementation planning and support',
          'Team training and change management',
        ],
      },
    ],
  },
]

export const allProducts = productCategories.flatMap((cat) => cat.products)
