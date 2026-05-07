import type { Artist } from '@/layout/util/type';
import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import MenuData from  '@/config/info.menu.json'
import { AnimatePresence, motion, type Variants } from 'motion/react';
import AlbumView from './AlbumView';

interface ArtistDetailContainerProps {
  handleClose: () => void,
  artistData: Artist
}

export default function ArtistDetailContainer({handleClose, artistData}: ArtistDetailContainerProps) {
  const menuDetail = MenuData.detail;
  const [selected, setSelected] = useState(menuDetail[0].id)
  
  const handleChange = (id: number) => {
    setSelected(id)
  }

  const menuVariants: Variants = {
    initial: {
      opacity: 0,
      y: 50
    },
    animate: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: 50
    }
  }

  const albumVariants: Variants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1
    },
    exit: {
      scale: 0,
      opacity: 0
    }
  }

  return (
    <div className='w-full h-full no-doc-scroll bg-black/60 fixed top-0 left-0 z-40 transition duration-300 ease-in-out md:p-10'>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.75)), url("${artistData.background_img}")`
        }}
        className='h-full max-w-7xl overflow-hidden mx-auto w-full relative bg-no-repeat bg-cover bg-center'>
          {/* Main Content */}
          <div className='w-full h-full p-5 grid grid-rows-[auto_1fr_auto]'>
            <h2 className='text-6xl font-bold text-white text-shadow-lg'>{artistData.name}</h2>
            {/* Album */}
            <AnimatePresence mode='wait'>
              {selected === 2 && (
                <motion.div 
                  variants={albumVariants}
                  initial={'initial'}
                  animate={'animate'}
                  exit={'exit'}
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut'
                  }}
                  className='w-full h-full min-h-0 overflow-hidden'>
                  <AlbumView albumData={artistData.albums}/>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence mode='wait'>
              <motion.div 
                layout 
                className='flex flex-col mt-auto gap-2 p-5 order-3'>
                {/* Menu Selection */}
                <div
                  className='flex flex-row gap-5'>
                  {menuDetail.map((item) => (
                    <div 
                      onClick={() => handleChange(item.id)}
                      key={item.id} 
                      className='relative w-fit h-fit group cursor-pointer'>
                      <span className='text-white text-4xl'>{item.title}</span>
                      <div className={`absolute left-0 -bottom-1 w-0 h-1 bg-white transition-all duration-200 ease-in-out
                        ${selected === item.id ? 'w-full ' : 'group-hover:w-full w-0'}`}/>
                    </div>
                  ))}
                </div>
                {/* Description of band */}
                {selected === 1 && (
                  <motion.span
                    key={selected}
                    layout
                    variants={menuVariants}
                    initial={'initial'}
                    exit={'exit'}
                    animate={'animate'}
                    transition={{
                      duration: 0.2,
                      ease: 'easeInOut'
                    }}>
                    <p className='font-sans text-xl text-white'>{artistData.description}</p>
                  </motion.span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        {/* Close button */}
        <div
          onClick={handleClose}
          className='p-1 absolute top-[2%] right-[2%] rounded-full duration-200 ease-in-out transition cursor-pointer hover:bg-black bg-black/30 text-white'>
          <IoMdClose size={36}/>
        </div>
      </div>
    </div>
  )
}
