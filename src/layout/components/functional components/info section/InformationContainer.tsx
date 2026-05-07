import React, { useRef, useState } from 'react'
import InformationData from '@/config/info.menu.json'
import { AnimatePresence, motion, MotionValue, useMotionValueEvent, useScroll, useTransform, type Variants } from 'motion/react'
import SlidingContent from './SlidingContent'

export default function InformationContainer() {
  
  return (
    <section id='information' className='relative w-full h-full bg-primary'>
      {InformationData.info.map((data, index) => (
        <SlidingContent
          key={data.id}
          title={data.title}
          content={data.content}
          image={data.img}
          className={`${index % 2 > 0 ? 'bg-secondary' : 'bg-primary'}`}
          reverse={index % 2 > 0}
        />
      ))}
    </section>
  )
}
