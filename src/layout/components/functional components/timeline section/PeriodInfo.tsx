import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, scale, useInView, useMotionValueEvent, useScroll, useSpring, useTransform, type Variants } from 'motion/react'
import { animate } from 'motion'
import PulsingCircle from '../../animations/PulsingCircle'

interface PeriodInfoProps {
  title?: string,
  year?: string,
  content?: string,
}

export default function PeriodInfo({content, year, title,}:PeriodInfoProps) {
  const [scrollTrigger, setScrollTrigger] = useState(false)
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const scaleY = useSpring(
    useTransform(scrollYProgress, [0.3, 1], [0, 1]), 
    { stiffness: 200, damping: 50 }
  )

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= .5 && !scrollTrigger) {
      setScrollTrigger(true)
    } else if (latest < .5 && scrollTrigger) {
      setScrollTrigger(false)
    }
  })

  const contentVariant: Variants = {
    initial: {
      opacity: 0,
      x: -20
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeOut',
        duration: .7,
      }
    }
  }

  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0.5, 1])
  return (
    <div ref={ref} className='h-0 min-h-fit w-full relative'>
      <AnimatePresence mode='wait'>
        <div className='flex flex-row gap-2 h-full'>
          {/* Progress bar */}
          <div className='hidden md:block w-2 h-full bg-black/50 relative rounded-full'>
            <motion.div 
              style={{scaleY}}
              className='absolute origin-top rounded-full bg-secondary left-0 top-0 w-2 h-full'/>
          </div>
          <div className='flex flex-col p-4 w-full h-full overflow-hidden'>
            {/* Main Title */}
            <div className='flex flex-col gap-2 w-full'>
              <motion.div style={{opacity}} className='grid grid-cols-[auto_1fr] gap-2 items-center'>
                <PulsingCircle
                  isActive={scrollTrigger}
                />
                <span className='font-semibold tracking-wide text-3xl md:text-6xl'>
                  {title}
                </span>
                <span className='col-start-2 font-regular text-2xl text-black/60'>
                  {year}
                </span>
              </motion.div>
            </div>
            {/* Content */}
            <motion.div 
              variants={contentVariant} 
              initial={'initial'} 
              animate={scrollTrigger ? "animate" : "initial"} 
              className='font-serif py-6 pr-5 text-xl leading-relaxed text-black'>
              {content}
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  )
}
