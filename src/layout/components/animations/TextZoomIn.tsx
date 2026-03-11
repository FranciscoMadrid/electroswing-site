import { useScroll, motion, useMotionValueEvent, MotionValue, useTransform, scale } from 'motion/react';
import React, { useRef, useState } from 'react'

interface TextZoomInProps {
  scrollY: MotionValue,
  words: string[],
  maxRange: number
}

export default function TextZoomIn({scrollY, words, maxRange}:TextZoomInProps) {
  const scaleText = 20
  const textColor = ['text-secondary', 'text-white']
  return (
    <div className='absolute flex items-center justify-center w-full h-full overflow-hidden'>
      {words.map((word, index) => {
        const start = (index / words.length) * maxRange;
        const end = ((index + 1)/words.length) * maxRange;
        const scale = useTransform(scrollY, [start, end], [0, scaleText]);
        const opacity = useTransform(scrollY, 
          [start, start + 0.05, end - 0.05, end],
          [0, 1, 1, 0]
        )
        return (
          <motion.div
            key={index}
            style={{
              userSelect: 'none',
              pointerEvents: 'none',
              scale: scale,
              opacity: opacity,
              position: 'absolute'
            }}
          >
            <h2 className={`font-bold uppercase tracking-tighter
              ${textColor[index % 2]}`}>
              {word}
            </h2>
          </motion.div>
        )
      })}
    </div>
  )
}
