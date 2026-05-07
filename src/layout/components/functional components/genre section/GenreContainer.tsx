import React from 'react'
import InformationData from '@/config/info.menu.json'
import FadeInContainer from '../../animations/FadeInContainer'

export default function GenreContainer() {
  return (
    <section id='genre' className='h-full w-full bg-linear-to-b from-primary via-primary to-[#183836] relative py-5'>
      <div className='max-w-7xl mx-auto flex flex-col h-full p-10'>
        <div className='flex flex-col text-center gap-5 bg-radial items-center py-32 leading-none relative'>
          <div className="absolute top-1/2 left-1/2 h-[50vh] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <p className='text-white/80 font-light tracking-widest text-xl md:text-2xl'>
            Rhythm to the soul
          </p>
          <h2 className='flex flex-col leading-[0.9] gap-5'>
            <span className='text-6xl md:text-8xl font-bold text-white'>
              Different Styles,
            </span>
            <span className='text-5xl md:text-7xl font-bold text-white opacity-80'>
              same beat
            </span>
          </h2>
        </div>

        <div className='w-full h-0.5 bg-white opacity-25'/>

        {InformationData.subgenre.map((genre, index) => (
          <FadeInContainer key={index} delay={index * 0.05}>
            <div className='grid grid-cols-1 gap-10 items-start p-10'>
              <span className='shadow-2xl border-b-2 w-fit text-3xl md:text-5xl font-bold text-white'>
                {genre.title}
              </span>
              <span className='text-xl md:text-2xl text-shadow-2xs text-white tracking-wide'>
                {genre.content}
              </span>
              <div className='w-full h-0.5 bg-white opacity-25'/>
            </div>
          </FadeInContainer>
        ))}
      </div>
    </section>
  )
}
