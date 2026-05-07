import React, { useRef } from 'react'
import PeriodInfo from './PeriodInfo'
import TimelineInfo from '@/config/timeline.info.json'

export default function TimelineContainer() {
  return (
    <section id='timeline' className='overflow-hidden py-10 w-full h-full'>
      <div className='w-full p-10 max-w-5xl mx-auto flex flex-col gap-10'>
        <h2 className='text-7xl text-shadow-2xs font-bold leading-relaxed tracking-wider text-secondary'>
          Timeline
        </h2>
        {TimelineInfo.timeline.map((period, index) => (
          <PeriodInfo
            key={index}
            title={period.title}
            year={period.years}
            content={period.description}
          />
        ))}
      </div>
    </section>
  )
}
