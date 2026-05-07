import { motion, type Variants } from 'motion/react'
import React from 'react'

interface PulsingCircleProps {
  isActive?: boolean
}
export default function PulsingCircle({isActive = false}:PulsingCircleProps) {

  const pulsingCircle: Variants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        repeat: 2,
      }
    }
  }

  return (
    <div className='relative overflow-hidden'>
      <svg viewBox="0 0 100 100" className="w-8 md:w-12 h-auto">
        <circle className='stroke-secondary stroke-10' cx="50" cy="50" r="45" fill='transparent' />
      </svg>
      <motion.svg 
        variants={pulsingCircle} 
        initial={'initial'} 
        animate={isActive ? 'animate' : 'initial'} 
        viewBox="0 0 100 100" className="w-8 md:w-12 h-auto absolute top-0 left-0">
        <circle className='stroke-secondary stroke-10' cx="50" cy="50" r="45" fill='transparent' />
      </motion.svg>
    </div>
  )
}
