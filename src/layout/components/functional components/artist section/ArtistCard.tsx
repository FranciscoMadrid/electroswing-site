import type { MotionValue } from 'motion'
import { useTransform , motion, useScroll, useSpring, AnimatePresence} from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'
import ArtistDetailContainer from './ArtistDetailContainer';
import { createPortal } from 'react-dom';
import type { Artist } from '@/layout/util/type';

/* This was a nightmate, i hate x and left */

interface ArtistCardProps {
  artistData: Artist,
  progress: MotionValue<number>,
  order: number,
  lenght: number,
}
export default function ArtistCard({artistData, progress, lenght, order}:ArtistCardProps) {
  const smoothScroll = useSpring(progress, {
    mass: .8,
    damping: 20,
    restDelta: 0.001,
    restSpeed: 0.001
  })
  const position = order / (lenght - 1);
  const imageWidth = 200
  const offset = (imageWidth - 100)/2
  const percentage = ((((imageWidth - 100) / imageWidth) * 100)/2).toFixed(2)
  const range = [0, position, position + 0.33]
  
  /* Since using X, calculation goes (150% space width - 100% main container)/150% extra width */
  const imgTranslate = useTransform(smoothScroll, range, [`-${percentage}%`, '0%',`${percentage}%`], {clamp: true})
  
  const [visible, setVisible] = useState(false) 
  const handleToggle = () => {
    setVisible(!visible);
  }
  const handleClose = () => {
    setVisible(false)
  }
  return (
    <>
      <div
        className='relative select-none cursor-pointer h-[80vh] w-full overflow-hidden bg-red-500/50'
        onClick={handleToggle}>
        <motion.div 
          style={{
            width: `${imageWidth}%`,
            left: `-${offset}%`,
          }}
          className='absolute w-full h-full z-10'>
            <motion.img
              style={{
                x: imgTranslate
              }}
              loading='lazy'
              draggable={false}
              alt='test.png'
              className='object-cover w-full h-full'
              src={artistData.img}
            />
        </motion.div>
        <div className='h-full w-full group z-20 absolute hover:bg-black/40 transition-all duration-200 ease-in-out'>
          <div className='group-hover:flex hidden flex-col items-center justify-center h-full text-center'>
            <span className='text-white text-4xl'>{artistData.name}</span>
          </div>
        </div>
      </div>
      {/* Extremely useful, mainly for overlays just moves the div to where you want skipping relative cont */}
      {visible && (
        createPortal(
          <AnimatePresence mode='wait'>
            <motion.div 
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                ease: 'easeInOut',
                duration: .5
              }}
              exit={{
                opacity: 0,
                transition:{
                  duration: 0.2
                }
              }}
              onClick={handleClose}
              className="fixed inset-0 z-[250]"> 
              <ArtistDetailContainer
                artistData={artistData}
                handleClose={handleClose}
              />
            </motion.div>
          </AnimatePresence>,
          document.body
        )
      )}
    </>
  )
}
