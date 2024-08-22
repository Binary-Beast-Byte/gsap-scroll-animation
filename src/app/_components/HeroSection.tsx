'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const HeroSection = () => {

    const textRef = useRef(null)
    const containerRef = useRef(null)
    const leafRef = useRef(null)
    const girlImagRef = useRef(null)

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: '53% 50%',
                scrub: true
            }
        })

       tl.to(textRef.current, {
        y: -300
       }, 'a')
       .to(leafRef.current, {
        scale: 1.2
       }, 'a')
       .to(girlImagRef.current, {
        scale: 1.3
       }, 'a')
       .to(containerRef.current, {
        y: 300
       }, 'a')
    })

  return (
    <div ref={containerRef}  className='min-h-screen bg-[#282828] flex flex-col items-center justify-center relative overflow-hidden'>
        <h1 ref={textRef} className='text-[10rem] font-extralight tracking-tight absolute top-[10rem] z-20 '>
            WONDERKIN TATTOO
        </h1>
        <div className='w-[586px] h-[674px] bg-[#858480] rounded-t-full absolute bottom-0 z-10' />
        <Image ref={leafRef} src={'/plant.png'} alt='plant' width={1200} height={500} className='w-[1500px] absolute bottom-0 z-0'    />
        <Image ref={girlImagRef} src={'/girl.png'} width={530} height={630}  alt='tatooed girl' className='absolute -bottom-8 z-30' />
    </div>
  )
}
