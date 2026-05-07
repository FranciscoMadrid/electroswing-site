import React, { useRef } from 'react'
import ArtistCard from './ArtistCard'
import { useScroll, useSpring, motion, useMotionValue } from 'motion/react';
import ArtistList from "@/config/artist.album.json"

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'
import type { SwiperOptions } from 'swiper/types';
import FadeInContainer from '../../animations/FadeInContainer';

export default function ArtistContainer() {
  const containerRef = useRef(null)
  const scrollProgress = useMotionValue(0)
  const sliderBreakpoints : SwiperOptions['breakpoints'] ={
    0: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
  return (
    <section id='artist' className='w-full flex h-screen'>
      <div className='w-full max-w-7xl mx-auto'>
        <h2 className='text-5xl md:text-7xl text-shadow-2xs font-bold leading-relaxed text-center w-full text-secondary px-10'>
          A list of Artists
        </h2>
        <FadeInContainer>
          <div 
            className='p-10'>
            <Swiper
              onProgress={(swiper) => scrollProgress.set(swiper.progress)}
              ref={containerRef}
              draggable
              freeMode
              modules={[FreeMode, Pagination]}
              breakpoints={sliderBreakpoints}
            >
              {ArtistList.map((item, index) => (
                <SwiperSlide 
                  draggable={false}
                  key={index}>
                  <ArtistCard
                    key={item.id}
                    artistData={item}
                    order={index}
                    lenght={ArtistList.length}
                    progress={scrollProgress}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </FadeInContainer>
      </div>
    </section>
  )
}
