import React from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type Variants } from "motion/react"

interface RecordAnimationProps {
  duration?: number
}
export default function RecordAnimation({duration = 2}:RecordAnimationProps) {
  return (
    <motion.img 
      animate={{
        rotate: 360
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'linear'
      }}
      className='will-change-transform object-cover'
      alt='record.png'
      src='images/record.png'
    />
  )
}
