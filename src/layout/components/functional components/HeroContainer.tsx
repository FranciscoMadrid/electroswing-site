import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type Variants } from "motion/react"
import TextZoomIn from '../animations/TextZoomIn'
import RecordContainer from '../animations/record/RecordContainer'
import MainTitle from '../animations/record/MainTitle'

export default function HeroContainer() {
  const mainRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: mainRef
  });

  return (
    <section id='start' ref={mainRef} className='relative h-[600vh] bg-background'>
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
              [0, .175, .35, .525, .7]}
            scaleRange={
              [.5, 1, 1.5, 2, 2.5]}
            translateRange={
              [0, .2, .7]}
            translate={[
              '0vh', '0vh', '50vh']}
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
          translateRange={[.7, .85]}
          textPrimaryTranslate={['0%', '-75%']}
          textPrimaryTranslateRange={[.8, .95]}
          textSecondaryTranslate={['0%', '75%']}
          textSecondaryTranslateRange={[.8, .95]}
        />
      </div>
    </section>
  )
}
