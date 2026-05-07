import React from 'react'
import { AnimatePresence, motion, MotionValue, useMotionValueEvent, useScroll, useTransform, type TransformInputRange, type Variants } from "motion/react"

interface MainTitleProps {
  scrollY: MotionValue,
  textPrimary: string,
  textSecondary: string,
  translateRange: TransformInputRange,
  translate: (string | number)[],
  textPrimaryTranslateRange: TransformInputRange,
  textPrimaryTranslate: (string | number)[],
  textSecondaryTranslateRange: TransformInputRange,
  textSecondaryTranslate: (string | number)[],
}

export default function MainTitle({
    scrollY, 
    textPrimaryTranslate, 
    textPrimaryTranslateRange,
    textSecondaryTranslate,
    textSecondaryTranslateRange,
    textPrimary, 
    textSecondary, 
    translate, 
    translateRange
  }:MainTitleProps) {
  const y = useTransform(scrollY, translateRange, translate)
  return (
    <motion.div 
      className='flex text-6xl md:text-9xl h-full flex-row absolute justify-center items-center'
      style={{
        y
      }}
      >
      <motion.p
        className='text-white font-bold text-shadow-2xs'
        style={{
          y: useTransform(scrollY, textPrimaryTranslateRange, textPrimaryTranslate)
        }}>
        {textPrimary}
      </motion.p>
      <motion.p className='text-secondary font-bold text-shadow-md'
        style={{
          y: useTransform(scrollY, textSecondaryTranslateRange, textSecondaryTranslate)
        }}
      >
        {textSecondary}
      </motion.p>
    </motion.div>
  )
}
