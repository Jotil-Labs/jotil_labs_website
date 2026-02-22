import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function AnimatedSection({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
