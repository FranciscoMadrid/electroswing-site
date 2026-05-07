import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, MotionValue, useMotionValueEvent, useScroll, useTransform, type Variants } from 'motion/react'

interface SlidingContentProps {
  content: string,
  image: string,
  title: string,
  reverse?: boolean,
  contentWidth?: string,
  className?: string
}
export default function SlidingContent({content, className, title, image, reverse = false, contentWidth = '45vw'}:SlidingContentProps) {
  const [scrollTrigger, setScrollTrigger] = useState(false)

  const mainRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start end", "end end"]
  })


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= .5 && !scrollTrigger) {
      setScrollTrigger(true)
    } else if (latest < .5 && scrollTrigger) {
      setScrollTrigger(false)
    }
  })

  return (
    <div 
      className={`w-full h-[200vh] [--content-width:100vw] md:[--content-width:35vw] relative ${className}`} 
      ref={mainRef}>
      <motion.div  
        className="sticky top-0 w-full h-screen overflow-hidden">
        <div className='w-full h-full relative'>
          <div
            style={{ width: 'var(--content-width)' }}
            className={`absolute top-0 -z-10 h-full ${reverse ? 'right-0' : 'left-0'}`}>
            <div
              className='p-10 flex flex-col gap-5'>
              <span className='text-5xl md:text-5xl font-bold text-white'>
                {title}
              </span>
              <p className='text-xl md:text-2xl lg:text-3xl text-white tracking-wider'>
                {content}
              </p>
            </div>
          </div>
          <motion.img
            animate={{
              x: scrollTrigger ? 
              (reverse ? `calc(-1 * var(--content-width))` : `var(--content-width)`) : '0',
              transition: {
                duration: .5,
                ease: 'easeInOut'
              }
            }}
            loading="lazy"
            alt="test"
            className=" top-0 left-0 w-screen z-20 object-center h-screen object-cover order-2"
            src={image}
          />
        </div>
      </motion.div>
    </div>
  )
}
