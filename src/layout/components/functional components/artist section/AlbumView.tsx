import type { Album } from '@/layout/util/type'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import React, { useState } from 'react'
import SongView from './SongView'
interface AlbumViewProps {
  albumData: Album[]
}
export default function AlbumView({albumData}:AlbumViewProps) {
  const [visible, setVisible] = useState(false)
  const [selected, setSelected] = useState<Album>(albumData[0])

  const handleToggle = (item: Album) => {
    setSelected(item)
    setVisible(!visible)
  }

  const handleClose = () => {
    setVisible(false)
  }

  const albumVariant: Variants = {
    initial: {
      opacity: 0,
      x: '-100%'
    },
    animate: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: '-100%'
    }
  }

  const songVariant: Variants = {
      initial: {
        opacity: 0,
        x: '100%'
      },
      animate: {
        opacity: 1,
        x: 0
      },
      exit: {
        opacity: 0,
        x: '100%'
      }
  }

  return (
    <div className='w-full h-full'>
      <AnimatePresence mode='popLayout' initial={false}>
        {!visible ? (
          <motion.div 
            key={'album'}
            variants={albumVariant}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            transition={{
              ease: 'easeInOut',
              duration: .5
            }}
            className='w-full h-full flex flex-col gap-2 p-5  overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-300 [&::-webkit-scrollbar-thumb]:bg-blue-800'>
            {albumData.map((album, index) => (
              <div key={index} className='grid grid-cols-[auto_1fr] justify-start gap-2 border-b-2 py-2 border-white'>
                <div 
                  className='flex cursor-pointer flex-row bg-blue-800 group w-30 md:w-55 h-fit md:h-full transition-transform duration-200 ease-in-out'
                  onClick={() => handleToggle(album)}>
                  <img 
                    loading='lazy'
                    alt={`${album.title}.png`}
                    src={album.album_img}
                    className='aspect-square h-full w-full object-cover'/>
                </div>

                {/* Album Info */}
                <div className='flex flex-col gap-2'>
                  <span className='text-white font-medium text-2xl md:text-5xl text-shadow-md'>{album.title}</span>
                  <span className='text-white font-normal text-xl md:text-4xl text-shadow-md'>Released on {album.year}</span>
                  <span className='text-white font-light text-lg md:text-4xl text-shadow-md'>{album.songs.length} Songs</span>
                </div>
              </div>
            ))}
          </motion.div>
        ):        
        /* SongView */
        <motion.div 
          key={'songs'}
          className='w-full h-full'
          variants={songVariant}
          initial={'initial'}
          animate={'animate'}
          transition={{
            ease:'easeInOut',
            duration: .5
          }}
          exit={'exit'}>
          <SongView
            handleToggle={handleClose}
            albumData={selected}
          />
        </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}
