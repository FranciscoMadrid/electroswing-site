import React from 'react'
import { useMotionValueEvent, useScroll, motion, AnimatePresence, type Variants } from 'motion/react'

interface DesktopNavbarProps {
  hidden: boolean
}

export default function DesktopNavbar({hidden}:DesktopNavbarProps) {
  const containerVariant:Variants = {
    hidden: {
      y:-80,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut'
      }
    }
  }
  return (
    <motion.div 
      variants={containerVariant}
      initial={'hidden'}
      animate={hidden ? 'hidden' : 'show'}
      className='w-full hidden md:flex p-5 bg-background flex-row gap-10 justify-between items-center'>
      <a href='#start' className='flex flex-row gap-5 items-center group'>
        <motion.img
          animate={{
            rotate: 360,
            transition:{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop'
            }
          }}
          loading='eager'
          alt='vinyl-record.png'
          className='h-8 w-8'
          src='/images/vinyl-record-navbar.png'/>
          <p className='text-2xl font-medium text-black transition-all duration-300 ease-in-out'>
            Electroswing
          </p>
      </a>
      
      <ul className='flex flex-row gap-5 items-center justify-between md:text-xl'>
        <li className='group relative'>
          <a href='#information' className='transition-colors'>Information</a>
          <div className='absolute bottom-0 rounded-full h-1 w-0 bg-accent group-hover:w-full transition-all duration-300 ease-in-out'/>
        </li>
        <li className='group relative'>
          <a href='#genre' className='transition-colors'>Genre</a>
          <div className='absolute bottom-0 rounded-full h-1 w-0 bg-accent group-hover:w-full transition-all duration-300 ease-in-out'/>
        </li>
        <li className='group relative'>
          <a href='#timeline' className='transition-colors'>Information</a>
          <div className='absolute bottom-0 rounded-full h-1 w-0 bg-accent group-hover:w-full transition-all duration-300 ease-in-out'/>
        </li>
        <li className='group relative'>
          <a href='#artist' className='transition-colors'>Artists</a>
          <div className='absolute bottom-0 rounded-full h-1 w-0 bg-accent group-hover:w-full transition-all duration-300 ease-in-out'/>
        </li>
      </ul>
    </motion.div>
  )
}
