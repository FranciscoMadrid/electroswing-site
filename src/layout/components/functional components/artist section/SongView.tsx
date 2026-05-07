import React from 'react'
import { AnimatePresence, motion, type Variants } from 'motion/react'
import type { Album } from '@/layout/util/type'
import { FaArrowLeft } from "react-icons/fa";

interface SongViewProps {
  albumData: Album
  handleToggle: () => void
}
export default function SongView({albumData, handleToggle}:SongViewProps) {
  return (
    <div className='w-full h-full flex flex-col gap-2 p-5 min-h-0 overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-300 [&::-webkit-scrollbar-thumb]:bg-blue-800'>
      {/* Header */}
      <div className='grid grid-cols-[1fr_auto] md:grid-cols-[auto_auto_auto_1fr] h-fit w-full gap-5 border-b-2 border-white py-2'>
        <div 
          onClick={handleToggle}
          className='p-2 rounded-full bg-black/30 hover:bg-black transition duration-300 ease-in-out cursor-pointer w-fit h-fit'>
          <FaArrowLeft 
            className='text-white'
            size={24}/>
        </div>
        <img
          loading='lazy'
          className='aspect-square object-cover w-30 h-fit md:h-full '
          alt={`${albumData.album_img}.png`}
          src={albumData.album_img}
        />
        <div className='flex flex-col h-full col-span-full md:col-span-1'>
          <span className='text-white font-medium text-4xl'>{albumData.title}</span>
          <span className='text-white font-light text-3xl'>Released on {albumData.year}</span>
        </div>
      </div>
      {/* Songs */} 
      <div className='flex flex-col'>
        {albumData.songs.map((song, index) => (
          <div className='grid grid-cols-[auto_1fr_auto] gap-5 px-5 items-center justify-start'>
            <span className='text-white font-light text-3xl'>
              {song.order}. {song.title}
            </span>
            <div className='h-1 w-full border-b-2 border-dashed border-white'/>
            <span className='text-white font-light text-3xl'>
              {song.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
