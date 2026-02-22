import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function AnimatedSection({ children, className, delay = 0, blur = false }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        ...(blur && { filter: 'blur(10px)' }),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(blur && { filter: 'blur(0px)' }),
      }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
