import type { ImageMetadata } from 'astro'
import { AnimatePresence, motion, scale, useInView, type Variants } from 'motion/react'
import React, { useRef } from 'react'

interface FloatingImageProps {
  initialRotate: number,
  finalRotate: number,
  duration?: number,
  img: string
}

export default function FloatingImage({initialRotate, finalRotate, duration = 2, img}: FloatingImageProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 'all',
    margin: '-100px'
  })
  const imgVariant: Variants = {
    initial: {
      rotate: initialRotate,
    },
    animate: {
      rotate: finalRotate,
    },
  }
  const containerVariant: Variants = {

  }
  return (
    <div ref={ref} className='w-fit h-fit'>
      <motion.div className='relative'
        style={{
          width: 300,
          height: 300
        }}
        initial={{
          scale: 0.65
        }}
        animate={isInView ? 
          {scale: 1}
          :{scale: 0.65}
          }
        exit={{
          scale: 0.65
        }}
      >
        <motion.img
          variants={imgVariant}
          initial={'initial'}
          animate= {'animate'}
          transition={{
            duration: duration,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse'
          }} 
          src={img}
          className='object-cover object-center'
          width={300} 
          height={300}/>
      </motion.div>
    </div>
  )
}
