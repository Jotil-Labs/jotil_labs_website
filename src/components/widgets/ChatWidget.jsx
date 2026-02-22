import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSquare, X, Send } from 'lucide-react'

// TODO: Connect to OpenAI API

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: 'Hi there! I\'m the Jotil Labs AI assistant. How can I help you today?',
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), from: 'user', text: input.trim() },
    ])
    setInput('')
    // TODO: Connect to OpenAI API for real responses
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: 'bot',
          text: 'Thanks for your message! Our team will get back to you shortly. In the meantime, you can explore our products or book a demo.',
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full btn-gradient border-none cursor-pointer flex items-center justify-center shadow-xl shadow-primary/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              <X size={22} color="#fff" strokeWidth={1.5} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.15 }}
              className="flex"
            >
              <MessageSquare size={22} color="#fff" strokeWidth={1.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] glass rounded-[20px] overflow-hidden flex flex-col"
            style={{ height: 480, maxHeight: 'calc(100vh - 140px)' }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-full btn-gradient flex items-center justify-center shrink-0">
                <MessageSquare size={14} color="#fff" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text">Jotil Labs AI</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-text-secondary">Online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed rounded-[14px] ${
                      msg.from === 'user'
                        ? 'btn-gradient text-white rounded-br-sm'
                        : 'bg-white/80 text-text border border-border rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-white/60 border border-border rounded-[10px] px-3.5 py-2.5 text-sm text-text placeholder:text-text-secondary/60 outline-none focus:border-border-hover transition-colors"
                  aria-label="Chat message input"
                />
                <button
                  type="submit"
                  className="w-9 h-9 rounded-[10px] btn-gradient border-none cursor-pointer flex items-center justify-center shrink-0"
                  aria-label="Send message"
                >
                  <Send size={14} color="#fff" strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
