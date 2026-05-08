import React, { useState, type ReactEventHandler } from 'react'
import { useMotionValueEvent, useScroll, motion, AnimatePresence, type Variants } from 'motion/react'
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

interface MobileNavbarProps {
  hidden: boolean
}
export default function MobileNavbar({hidden}:MobileNavbarProps) {
  const [toggleView, setToggleView] = useState(false);

  const handleToggle = () => {
    setToggleView(!toggleView)
  }
  const handleClose = () => {
    setToggleView(false)
  }

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

  const menuVariant:Variants = {
    hidden: {
      width: 0
    },
    show: {
      width: '50vw',
      transition: {
        duration: .5,
        ease: 'easeInOut'
      }
    }
  }
  return (
    <>
      <motion.div 
        variants={containerVariant}
        initial={'hidden'}
        animate={hidden ? 'hidden' : 'show'}
        className='w-full md:hidden bg-background'>
        <div className='flex flex-row gap-10 p-5 justify-between items-center'>
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
          <div className='rounded-full p-2 cursor-pointer hover:bg-black group transition-colors ease-in-out duration-300' onClick={handleToggle}>
            <FaBars className='group-hover:text-white' size={36}/>
          </div>
        </div>
      </motion.div>
      {/* Menu View */}
      <AnimatePresence mode='wait'>
        {toggleView && (
          <motion.div
            onClick={handleClose}
            initial={{opacity: 0}}
            animate={toggleView ? {opacity: 1} : {opacity: 0}}
            exit={{opacity: 0}}
            transition={{
              staggerChildren: 0.5
            }}
            className='fixed top-0 left-0 w-full h-full bg-black/60'>
            
            <motion.div 
              variants={menuVariant}
              initial={'hidden'}
              animate={toggleView ? 'show' : 'hidden'}
              className='h-full w-[50vw] origin-right justify-self-end flex flex-col bg-primary gap-5 items-center justify-start'>
              {/* Logo */}
              <div className='flex flex-row justify-between items-center w-full bg-primary-darken'>
                <a href='#start' className='flex flex-row p-5 w-full gap-5 items-center group'>
                  <img
                    loading='eager'
                    alt='vinyl-record.png'
                    className='h-8 w-8'
                    src='/images/vinyl-record-navbar.png'/>
                  <p className='text-2xl font-bold text-white transition-all duration-300 ease-in-out'>
                    Electroswing
                  </p>
                </a>
              </div>

              <ul className='flex flex-col text-white gap-5 items-center justify-between text-2xl font-medium'>
                <li className='group relative'>
                  <a href='#information' className='transition-colors'>Information</a>
                </li>
                <li className='group relative'>
                  <a href='#genre' className='transition-colors'>Genre</a>
                </li>
                <li className='group relative'>
                  <a href='#timeline' className='transition-colors'>Information</a>
                </li>
                <li className='group relative'>
                  <a href='#artist' className='transition-colors'>Artists</a>
                </li>
              </ul>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
