import { Calendar, MessageSquare, UserPlus, MessageCircle, Users, UserCheck, Mail, Phone, BarChart3, Brain, Inbox, Camera, Route, Sparkles } from 'lucide-react'

export const FLOATING_CARDS = {
  receptionist: [
    { id: 'calendar', icon: Calendar, label: 'Thu 10:00 AM', sublabel: 'Appointment booked', top: '-30px', right: '-60px', rotate: '4deg', depth: '-50px' },
    { id: 'sms', icon: MessageSquare, label: 'Confirmation sent', sublabel: 'SMS delivered', bottom: '60px', right: '-65px', rotate: '-3deg', depth: '-30px' },
    { id: 'crm', icon: UserPlus, label: 'Sarah Mitchell', sublabel: 'Added to CRM', top: '80px', left: '-55px', rotate: '-5deg', depth: '-60px' },
  ],
  messenger: [
    { id: 'whatsapp', icon: MessageCircle, label: 'New message', sublabel: 'WhatsApp', top: '-30px', right: '-60px', rotate: '4deg', depth: '-50px' },
    { id: 'teams', icon: Users, label: 'Channel synced', sublabel: 'Teams', bottom: '60px', right: '-65px', rotate: '-3deg', depth: '-30px' },
    { id: 'handoff', icon: UserCheck, label: 'Escalated', sublabel: 'Human agent', top: '80px', left: '-55px', rotate: '-5deg', depth: '-60px' },
  ],
  outreach: [
    { id: 'email', icon: Mail, label: 'Drip sent', sublabel: 'Email sequence', top: '-30px', right: '-60px', rotate: '4deg', depth: '-50px' },
    { id: 'dialer', icon: Phone, label: 'Auto-dial', sublabel: 'Queued', bottom: '60px', right: '-65px', rotate: '-3deg', depth: '-30px' },
    { id: 'analytics', icon: BarChart3, label: '3x meetings', sublabel: 'Booked', top: '80px', left: '-55px', rotate: '-5deg', depth: '-60px' },
  ],
  space: [
    { id: 'model', icon: Brain, label: 'GPT-4o', sublabel: 'Generating', top: '-30px', right: '-70px', rotate: '4deg', depth: '-50px' },
    { id: 'perf', icon: BarChart3, label: 'Performance', sublabel: '94% quality', bottom: '50px', right: '-70px', rotate: '-3deg', depth: '-30px' },
    { id: 'inbox', icon: Inbox, label: 'Unified inbox', sublabel: '12 conversations', top: '70px', left: '-60px', rotate: '-5deg', depth: '-60px' },
  ],
  avatar: [
    { id: 'video', icon: Camera, label: 'Live presence', sublabel: 'Active', top: '-30px', right: '-70px', rotate: '4deg', depth: '-50px' },
    { id: 'onboarding', icon: Route, label: 'Guided selling', sublabel: 'Step 2 of 4', bottom: '50px', right: '-70px', rotate: '-3deg', depth: '-30px' },
    { id: 'personality', icon: Sparkles, label: 'Brand voice', sublabel: 'Custom tone', top: '70px', left: '-60px', rotate: '-5deg', depth: '-60px' },
  ],
}
