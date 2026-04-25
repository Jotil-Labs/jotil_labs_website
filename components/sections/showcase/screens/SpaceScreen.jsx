'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Users, BarChart3, Cpu, Settings } from 'lucide-react'

const sidebarIcons = [MessageCircle, Users, BarChart3, Cpu, Settings]
const activeIconIndex = 3

const models = [
  {
    name: 'Receptionist v2.1',
    metrics: [
      { label: 'Response Quality', value: '87%' },
      { label: 'Avg Handle Time', value: '45s' },
      { label: 'Satisfaction', value: '4.2/5' },
    ],
    highlighted: false,
  },
  {
    name: 'Receptionist v2.3',
    metrics: [
      { label: 'Response Quality', value: '94%' },
      { label: 'Avg Handle Time', value: '38s' },
      { label: 'Satisfaction', value: '4.7/5' },
    ],
    highlighted: true,
  },
]

export function SpaceScreen({ isActive }) {
  return (
    <div className="w-full h-full flex bg-[#fafbfd] text-[10px] overflow-hidden">
      {/* Sidebar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.35, delay: 0 }}
        className="w-12 bg-white border-r border-gray-100 flex flex-col items-center py-4 gap-4 shrink-0"
      >
        {sidebarIcons.map((Icon, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: i === activeIconIndex ? 'rgba(56, 89, 168, 0.1)' : 'transparent',
            }}
          >
            <Icon
              className="w-4 h-4"
              strokeWidth={1.5}
              style={{ color: i === activeIconIndex ? '#3859a8' : '#a0a0a0' }}
            />
          </div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col p-3 min-w-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="flex items-center justify-between mb-3"
        >
          <p className="text-xs font-semibold text-gray-900">AI Model Playground</p>
          <div
            className="px-2 py-0.5 rounded-full text-[9px] font-medium text-white"
            style={{ backgroundColor: '#3859a8' }}
          >
            Compare
          </div>
        </motion.div>

        {/* Model cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="flex gap-2 flex-1"
        >
          {models.map((model) => (
            <div
              key={model.name}
              className="flex-1 rounded-lg border p-2.5 flex flex-col"
              style={{
                borderColor: model.highlighted ? 'rgba(56, 89, 168, 0.25)' : '#e5e7eb',
                backgroundColor: model.highlighted ? 'rgba(56, 89, 168, 0.02)' : '#fff',
              }}
            >
              <p className="text-[10px] font-semibold text-gray-900 mb-2">{model.name}</p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.35, delay: 0.6 }}
                className="space-y-1.5"
              >
                {model.metrics.map((metric) => (
                  <div key={metric.label} className="flex justify-between items-center">
                    <span className="text-[9px] text-gray-400">{metric.label}</span>
                    <span
                      className="text-[10px] font-semibold"
                      style={{ color: model.highlighted ? '#3859a8' : '#374151' }}
                    >
                      {metric.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
