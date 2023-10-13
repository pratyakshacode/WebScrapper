'use client'
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const HeroCarousel = () => {

    const heroImage = [
        {imgUrl: '/assets/images/hero-1.svg', alt:'smartwatch'},
        {imgUrl: '/assets/images/hero-2.svg', alt:'bag'},
        {imgUrl: '/assets/images/hero-3.svg', alt:'lamp'},
        {imgUrl: '/assets/images/hero-4.svg', alt:'air fryer'},
        {imgUrl: '/assets/images/hero-5.svg', alt:'chair'},
    ]
  return (
    <div className='hero-carousel'>
      <Carousel showThumbs={false} autoPlay infiniteLoop interval={2000} showArrows={false} showStatus={false} >
        

        {heroImage.map((image)=>{
            return <Image src={image.imgUrl} alt={image.alt} width={475} height={475} className='object-contain' key={image.alt}/>
        })}
      </Carousel>
      <Image src={'assets/icons/hand-drawn-arrow.svg'} width={175} height={175} alt='arrow' className='max-xl:hidden absolute -left-[25%] bottom-[10%] z-0'></Image>
    </div>
  )
}

export default HeroCarousel
