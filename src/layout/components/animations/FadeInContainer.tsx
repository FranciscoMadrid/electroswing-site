import React, { type ReactNode } from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'

interface FadeInContainerProps {
  children: ReactNode,
  duration?: number,
  once?: boolean,
  delay?: number
}
export default function FadeInContainer({children, delay = 0, duration = 0.8, once = true}:FadeInContainerProps) {
  
  const containerVariant: Variants = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition:{
        ease: [.5, 1, .6, 1],
        duration: duration,
        delay: delay
      }
    }
  }

  return (
    <motion.div 
      variants={containerVariant}
      initial={'initial'}
      whileInView={'animate'}
      viewport={{
        amount: .2,
        once: once,
      }}
      className='w-full h-full'>
      {children}
    </motion.div>
  )
}
