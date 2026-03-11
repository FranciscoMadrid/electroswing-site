import React from 'react'
import { AnimatePresence, motion, MotionValue, useMotionValueEvent, useScroll, useTransform, type TransformInputRange, type Variants } from "motion/react"
import RecordAnimation from './RecordAnimation'

interface RecordContainerProps{
  scrollY: MotionValue,
  range: TransformInputRange,
  scaleRange: TransformInputRange,
  translateRange: TransformInputRange,
  translate: (string | number)[];
}

export default function RecordContainer({scrollY, range, scaleRange, translateRange, translate}:RecordContainerProps) {
  const scale = useTransform(scrollY, range, scaleRange)
  const y = useTransform(scrollY, translateRange, translate)
  return (
    <motion.div
      style={{
        scale,
        y
      }}
    >
      <RecordAnimation duration={3}/>
    </motion.div>
  )
}
