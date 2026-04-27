'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { MessageCircle, Users, BarChart3, Cpu, Settings, Check, Calendar, Loader2 } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const SIDEBAR_ICONS = [MessageCircle, Users, BarChart3, Cpu, Settings]

const SCENE_SIDEBAR_ACTIVE = [3, 0, 1]

const MODELS = [
  { name: 'GPT-4', tag: 'Fast reasoning', color: '#10a37f' },
  { name: 'Claude', tag: 'Long context', color: '#d97706' },
  { name: 'Gemini', tag: 'Multimodal', color: '#4285f4' },
  { name: 'Llama 3', tag: 'Open source', color: '#7c3aed' },
]

const SELECTED_MODEL = 1

const CHAT_MESSAGES = [
  { role: 'user', text: 'Summarize today\'s missed calls and suggest follow-ups' },
  { role: 'ai', text: 'You had 3 missed calls today. Two from returning clients asking about pricing. I recommend a follow-up text with your rate sheet. One new lead from Google Ads. I suggest an immediate callback.' },
  { role: 'user', text: 'Schedule the callback for 2 PM' },
]

function Sidebar({ activeScene }) {
  const activeIdx = SCENE_SIDEBAR_ACTIVE[activeScene] ?? 3
  return (
    <div className="w-10 bg-white border-r border-gray-100 flex flex-col items-center py-3 gap-3 shrink-0">
      {SIDEBAR_ICONS.map((Icon, i) => (
        <div
          key={i}
          className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors duration-300"
          style={{ backgroundColor: i === activeIdx ? 'rgba(56, 89, 168, 0.1)' : 'transparent' }}
        >
          <Icon className="w-3.5 h-3.5" strokeWidth={1.5} style={{ color: i === activeIdx ? '#3859a8' : '#a0a0a0' }} />
        </div>
      ))}
    </div>
  )
}

function ModelSelectionScene({ progress }) {
  return (
    <div className="flex-1 flex flex-col p-3 min-w-0">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[11px] font-semibold text-gray-900">Select a Model</p>
        <div className="px-2 py-0.5 rounded-full text-[8px] font-medium text-white" style={{ backgroundColor: '#3859a8' }}>
          Configure
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {MODELS.map((model, i) => {
          const isSelected = i === SELECTED_MODEL && progress > 0.4
          return (
            <div
              key={model.name}
              className="rounded-lg border p-2 relative transition-all duration-300"
              style={{
                borderColor: isSelected ? model.color : '#e5e7eb',
                backgroundColor: isSelected ? `${model.color}08` : '#fff',
                transform: isSelected ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              {isSelected && (
                <div
                  className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: model.color }}
                >
                  <Check className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                </div>
              )}
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: model.color }} />
                <p className="text-[10px] font-semibold text-gray-900">{model.name}</p>
              </div>
              <p className="text-[8px] text-gray-400">{model.tag}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ChatScene() {
  const selectedModel = MODELS[SELECTED_MODEL]
  return (
    <div className="flex-1 flex flex-col p-3 min-w-0">
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedModel.color }} />
          <p className="text-[11px] font-semibold text-gray-900">{selectedModel.name} Chat</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-[8px] text-green-600">Online</span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {CHAT_MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={`flex mb-1.5 ${msg.role === 'user' ? 'justify-end' : 'items-end gap-1.5'}`}
          >
            {msg.role === 'ai' && (
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                style={{ background: `linear-gradient(135deg, ${selectedModel.color}, ${selectedModel.color}cc)` }}
              >
                <Logo size={9} tone="on-dark" animate={false} />
              </div>
            )}
            <div
              className={`max-w-[80%] px-2 py-1.5 text-[9px] leading-[1.4] ${
                msg.role === 'user'
                  ? 'rounded-xl rounded-br-sm text-white'
                  : 'rounded-xl rounded-bl-sm text-gray-900 bg-[#f1f3f5]'
              }`}
              style={msg.role === 'user' ? { backgroundColor: '#3859a8' } : undefined}
            >
              {msg.text}
            </div>
          </div>
        ))}

        <div className="flex flex-col items-center py-2 my-1">
          <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: 'rgba(56, 89, 168, 0.08)' }}>
            <Calendar size={12} strokeWidth={1.5} style={{ color: '#3859a8' }} />
          </div>
          <div className="flex items-center gap-1 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[8px] font-semibold" style={{ color: '#3859a8' }}>Callback scheduled</span>
            <span className="text-[7px] text-gray-400">2:00 PM</span>
          </div>
        </div>
      </div>

      <div className="shrink-0 pt-1.5 border-t border-gray-100 flex items-center gap-2">
        <div className="flex-1 bg-gray-50 rounded-full px-2.5 py-1 text-[8px] text-gray-400">
          Type a message...
        </div>
      </div>
    </div>
  )
}

function AgentCreationScene({ progress }) {
  const subProgress = (progress - 0.66) / 0.34
  const phase = subProgress < 0.33 ? 'form' : subProgress < 0.66 ? 'creating' : 'success'

  return (
    <div className="flex-1 flex flex-col p-3 min-w-0">
      <div className="flex items-center justify-between mb-2.5">
        <p className="text-[11px] font-semibold text-gray-900">Create New Agent</p>
      </div>

      <div className="flex-1 flex items-start justify-center pt-2">
        <div className="w-full rounded-lg border border-gray-200 bg-white p-3">
          <div className="space-y-2 mb-3">
            <div>
              <p className="text-[8px] text-gray-400 mb-0.5">Name</p>
              <p className="text-[10px] text-gray-900 font-medium">Sales Assistant</p>
            </div>
            <div>
              <p className="text-[8px] text-gray-400 mb-0.5">Model</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: MODELS[SELECTED_MODEL].color }} />
                <p className="text-[10px] text-gray-900 font-medium">{MODELS[SELECTED_MODEL].name}</p>
              </div>
            </div>
            <div>
              <p className="text-[8px] text-gray-400 mb-0.5">Purpose</p>
              <p className="text-[10px] text-gray-900 font-medium">Follow-up & scheduling</p>
            </div>
          </div>

          {phase === 'form' && (
            <button
              className="w-full py-1.5 rounded-lg text-[10px] font-semibold text-white"
              style={{ backgroundColor: '#3859a8' }}
            >
              Create Agent
            </button>
          )}

          {phase === 'creating' && (
            <div className="w-full py-1.5 rounded-lg text-[10px] font-semibold text-white flex items-center justify-center gap-1.5" style={{ backgroundColor: '#3859a8' }}>
              <Loader2 className="w-3 h-3 animate-spin" />
              Creating...
            </div>
          )}

          {phase === 'success' && (
            <div className="w-full py-2 rounded-lg border border-green-200 bg-green-50 flex flex-col items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-[10px] font-semibold text-green-700">Agent Created</p>
              <div className="flex items-center gap-1">
                <p className="text-[9px] text-gray-600">Sales Assistant</p>
                <span className="px-1.5 py-0.5 rounded-full text-[7px] font-medium bg-green-100 text-green-700">Active</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function SpaceScreen({ isActive, onAction, progressRef }) {
  const sceneRefs = useRef([])
  const tickerRef = useRef(null)
  const sceneIndexRef = useRef(0)

  useEffect(() => {
    if (!isActive) {
      sceneRefs.current.forEach((el) => {
        if (el) gsap.set(el, { clearProps: 'all' })
      })
      return
    }

    const updateScenes = () => {
      const progress = progressRef?.current ?? 0
      const sceneFloat = progress * 3
      const activeScene = Math.min(Math.floor(sceneFloat), 2)
      sceneIndexRef.current = activeScene

      sceneRefs.current.forEach((el, i) => {
        if (!el) return

        if (i === activeScene) {
          gsap.set(el, { opacity: 1, visibility: 'visible', zIndex: 2 })
        } else {
          const dist = Math.abs(i - sceneFloat)
          const fade = Math.max(0, 1 - dist * 4)
          if (fade > 0.01) {
            gsap.set(el, { opacity: fade, visibility: 'visible', zIndex: 1 })
          } else {
            gsap.set(el, { opacity: 0, visibility: 'hidden', zIndex: 0 })
          }
        }
      })
    }

    gsap.ticker.add(updateScenes)
    tickerRef.current = updateScenes

    return () => {
      gsap.ticker.remove(updateScenes)
    }
  }, [isActive, progressRef])

  const progress = progressRef?.current ?? 0
  const activeScene = Math.min(Math.floor(progress * 3), 2)

  return (
    <div className="w-full h-full flex bg-[#fafbfd] text-[10px] overflow-hidden">
      <Sidebar activeScene={activeScene} />

      <div className="flex-1 relative min-w-0">
        <div
          ref={(el) => { sceneRefs.current[0] = el }}
          className="absolute inset-0 flex"
        >
          <ModelSelectionScene progress={progress} />
        </div>

        <div
          ref={(el) => { sceneRefs.current[1] = el }}
          className="absolute inset-0 flex"
        >
          <ChatScene />
        </div>

        <div
          ref={(el) => { sceneRefs.current[2] = el }}
          className="absolute inset-0 flex"
        >
          <AgentCreationScene progress={progress} />
        </div>
      </div>
    </div>
  )
}
