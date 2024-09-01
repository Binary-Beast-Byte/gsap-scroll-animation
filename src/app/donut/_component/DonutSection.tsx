'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

export const DonutSection = () => {

  const [step, setStep] = useState<number>(1)

  const blueBerryTextRef = useRef(null)
  const appleGreenTextRef = useRef(null)
  const blueBerryRef = useRef(null)
  const greenAppleRef = useRef(null)
  const greenContainerRef = useRef(null)
  const caramelContainerRef = useRef(null)
  const caramelRef = useRef(null)

  const caramelTextRef = useRef(null)
  const timeLine = useRef(gsap.timeline({ paused: true}))

  const handleNext = () => {
    if (step ===  1) {
      timeLine.current = gsap.timeline()
      .to(blueBerryTextRef.current, {
        y: 700
      }, 'a')
      .to(blueBerryRef.current, {
        y: -520,
        rotate: 180,
        scale: 0.4
      }, 'a')
      .to(greenAppleRef.current, {
        scale: 1,
        top: '50%',
        rotate: 0,
      }, 'a')
      .to(greenContainerRef.current, {
        scale: 20,
        duration: 0.8,
      }, 'a')
      .to(appleGreenTextRef.current, {
        scale: 1,
        top: '26%'
      }, 'a')
      .to('.leaf1', {
        rotate: 45
      }, 'a')
      .to('.leaf2', {
        rotate: 45
      }, 'a')
      .to('.leaf3', {
        rotate: 45
      }, 'a')
      .to('.leaf4', {
        rotate: 45
      }, 'a')
      .to(caramelRef.current, {
        top: '105%'
      }, 'a')
    } else{
      timeLine.current = gsap.timeline()
      .to(greenAppleRef.current, {
        y: -520,
        rotate: 180,
        scale: 0.4
      }, 'b')
      .to(caramelRef.current, {
        scale: 1,
        top: '50%',
        rotate: 0,
      }, 'b')
      .to(appleGreenTextRef.current, {
        y: 700,
      }, 'b')
      .to(caramelContainerRef.current, {
        scale: 20,
        duration: 0.8,
      }, 'b')
      .to(caramelTextRef.current, {
           scale: 1,
        top: '26%'
      }, 'b')
      .to('.leaf1', {
        rotate: 180
      }, 'b')
      .to('.leaf2', {
        rotate: 180
      }, 'b')
      .to('.leaf3', {
        rotate: 180
      }, 'b')
      .to('.leaf4', {
        rotate: 180
      }, 'b')
     
    } 
    
  }

  const handlePrevious = () => {
    timeLine.current.reverse()
  }

  return (
    <div className='h-screen bg-gradient-radial from-[#e0b8ff] to-[#744eb2] flex justify-center items-center overflow-hidden'>
      <div className='w-full h-full relative '>
        {/* green circle container */}
        <div ref={greenContainerRef} className='absolute -top-24 size-40 rounded-full scale-0  left-1/2 -translate-x-1/2   bg-gradient-radial from-[#E0FFB8] to-[#7AB24E] ' />
        <div ref={caramelContainerRef} className='absolute -top-24 size-40 rounded-full scale-0  left-1/2 -translate-x-1/2   bg-gradient-radial from-[#FFE3B8] to-[#D68042]' />


      <h1 ref={blueBerryTextRef} className='text-[15vw] w-full text-center uppercase font-anton absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
            Blue berry
        </h1>
      <h2 ref={appleGreenTextRef} className='text-[15vw] w-full text-center uppercase font-anton absolute  left-1/2 -translate-x-1/2 scale-0 -top-64'>
            green apple
        </h2>

      <h3 ref={caramelTextRef} className='text-[15vw] w-full text-center uppercase font-anton absolute  left-1/2 -translate-x-1/2 scale-0 -top-64'>
            caramel
        </h3>
        {/* donut images */}
        <Image ref={blueBerryRef}  width={800} height={800} alt='Blue berry donut' src={'/blueberry.png'} className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' />
        {/* //*Green apple donut */}
        <Image ref={greenAppleRef} width={800} height={800} alt='Blue berry donut' src={'/green-apple.png'} className='absolute top-[104%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[45vw] scale-[0.4]  rotate-180' />
        <Image ref={caramelRef} width={800} height={800} alt='Blue berry donut' src={'/caramel.png'} className='absolute top-[120%] -translate-y-1/2 left-1/2 -translate-x-1/2 size-[45vw] scale-[0.4]  rotate-180' />

        {/* // * Caramel donut */}



        {/* leaf images */}
        <Image width={128} height={224} src={'/leaf.png'} alt='leaf image'  className='absolute top-[5%] left-[15%] -rotate-[58deg] leaf1 '/>
        <Image width={200} height={200} src={'/leaf1.png'} alt='leaf image' className='absolute top-[5%] right-[15%] leaf2' />
        <Image width={128} height={224} src={'/leaf.png'} alt='leaf image'  className='absolute bottom-[5%] right-[15%] rotate-[125deg] leaf3 '/>
        <Image width={200} height={200} src={'/leaf1.png'} alt='leaf image' className='absolute bottom-[5%] left-[15%] rotate-180 leaf4' />

        {/* swipe animation */}
        <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full flex justify-between px-4 '>
        <ChevronLeft onClick={handlePrevious}  className='size-12 cursor-pointer' 
         />
        <ChevronRight className='size-12 cursor-pointer' onClick={() => {
          handleNext();
          setStep((prev) => prev + 1)
        }} />
        </div>
      </div>
       
    </div>
  )
}
