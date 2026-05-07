import React from 'react'
interface TextImageContainerProps {
  content: string,
  image: string,
  title: string,
  className?: string,
  reverse?: boolean
}
export default function TextImageContainer({content, image, title, className, reverse}:TextImageContainerProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 p-5 w-full ${className}`}>
      <img 
        loading='lazy'
        className='bg-cover w-fit h-fit rounded-2xl order-2' 
        alt={image}
        src={image}/>
      <div className={`flex flex-col gap-2 ${reverse ? 'md:order-2' : 'order-1'}`}>
        <h2 className={`text-3xl md:text-5xl font-bold text-secondary`}>
          {title}
        </h2>
        <span className={`text-xl md:text-2xl leading-relaxed text-black`}>
          {content}
        </span>
      </div>
    </div>
  )
}
