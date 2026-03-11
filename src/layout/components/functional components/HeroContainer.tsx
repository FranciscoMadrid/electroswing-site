import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type Variants } from "motion/react"
import TextZoomIn from '../animations/TextZoomIn'
import RecordAnimation from '../animations/record/RecordAnimation'
import RecordContainer from '../animations/record/RecordContainer'
import MainTitle from '../animations/record/MainTitle'

export default function HeroContainer() {
  const [duration, setDuration] = useState(5)
  const speed = 1.5

  const mainRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: mainRef
  });

  return (
    <section className='relative h-[500vh] bg-background'>
      {/* Recorder Sticky */}
      <div className='sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden justify-center'>
        <motion.div
          className='relative w-full h-full flex flex-col items-center justify-center'
          initial={{
            y: '100%',
            scale: 0.2,
          }}
          animate={{
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
          style={{
            width: '300px',
            height: '300px',
          }}
          >
          <RecordContainer
            scrollY={scrollYProgress}
            range={
              [0, .2, .4, .6, .8]}
            scaleRange={
              [.5, 1, 1.5, 2, 2]}
            translateRange={
              [0, .60, .8]}
            translate={[
              '0vh', '0vh', '175%']}
          />
        </motion.div>
        <TextZoomIn 
          scrollY={scrollYProgress}
          maxRange={0.7}
          words={['Energetic', 'Swing', 'Tecno', 'Upbeat']}/>
        {/* Hero Text */}
        <MainTitle
          scrollY={scrollYProgress}
          textPrimary='Electro'
          textSecondary='Swing'
          translate={['100vh', '0%']}
          translateRange={[0.7, 0.9]}
          textPrimaryTranslate={['0%', '-75%']}
          textPrimaryTranslateRange={[0.9, .95]}
          textSecondaryTranslate={['0%', '75%']}
          textSecondaryTranslateRange={[0.9, .95]}
        />
      </div>
    </section>
  )
}
