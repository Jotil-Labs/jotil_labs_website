import { Calendar, MessageSquare, UserPlus, MessageCircle, Users, UserCheck, Mail, Phone, BarChart3, Brain, Inbox, Camera, Route, Sparkles } from 'lucide-react'

export const FLOATING_CARDS = {
  receptionist: [
    { id: 'calendar', icon: Calendar, label: 'Thu 10:00 AM', sublabel: 'Appointment booked', top: '-16px', right: '-44px', rotate: '3deg' },
    { id: 'sms', icon: MessageSquare, label: 'Confirmation sent', sublabel: 'SMS delivered', bottom: '80px', right: '-48px', rotate: '-2deg' },
    { id: 'crm', icon: UserPlus, label: 'Sarah Mitchell', sublabel: 'Added to CRM', top: '60px', left: '-38px', rotate: '-4deg' },
  ],
  messenger: [
    { id: 'whatsapp', icon: MessageCircle, label: 'New message', sublabel: 'WhatsApp', top: '-16px', right: '-44px', rotate: '3deg' },
    { id: 'teams', icon: Users, label: 'Channel synced', sublabel: 'Teams', bottom: '80px', right: '-48px', rotate: '-2deg' },
    { id: 'handoff', icon: UserCheck, label: 'Escalated', sublabel: 'Human agent', top: '60px', left: '-38px', rotate: '-4deg' },
  ],
  outreach: [
    { id: 'email', icon: Mail, label: 'Drip sent', sublabel: 'Email sequence', top: '-16px', right: '-44px', rotate: '3deg' },
    { id: 'dialer', icon: Phone, label: 'Auto-dial', sublabel: 'Queued', bottom: '80px', right: '-48px', rotate: '-2deg' },
    { id: 'analytics', icon: BarChart3, label: '3x meetings', sublabel: 'Booked', top: '60px', left: '-38px', rotate: '-4deg' },
  ],
  space: [
    { id: 'model', icon: Brain, label: 'GPT-4o', sublabel: 'Generating', top: '-16px', right: '-52px', rotate: '3deg' },
    { id: 'perf', icon: BarChart3, label: 'Performance', sublabel: '94% quality', bottom: '60px', right: '-52px', rotate: '-2deg' },
    { id: 'inbox', icon: Inbox, label: 'Unified inbox', sublabel: '12 conversations', top: '50px', left: '-42px', rotate: '-4deg' },
  ],
  avatar: [
    { id: 'video', icon: Camera, label: 'Live presence', sublabel: 'Active', top: '-16px', right: '-52px', rotate: '3deg' },
    { id: 'onboarding', icon: Route, label: 'Guided selling', sublabel: 'Step 2 of 4', bottom: '60px', right: '-52px', rotate: '-2deg' },
    { id: 'personality', icon: Sparkles, label: 'Brand voice', sublabel: 'Custom tone', top: '50px', left: '-42px', rotate: '-4deg' },
  ],
}
