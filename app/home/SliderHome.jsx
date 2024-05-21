'use client'

import React, { useEffect } from 'react';

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Link from 'next/link';


export default function SliderHome({image}){
    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination, Autoplay,EffectFade],
            // Optional parameters
            direction: 'horizontal',
            loop: true,
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            autoplay : {
                delay: 5000,
            },
            effect : 'fade'
          });
        return () => {
            // Cleanup Swiper instance when component unmounts
            swiper.destroy();
          };

    }, []);
    return(
        <>
        <div className='relative flex w-full h-fit items-center justify-center'>
            {/* Bouton de connexion */}
                {/* <Link className='bg-white px-5 py-3 rounded-xl border-2 border-orange text-orange text-lg ml-auto mr-5 absolute z-20' href="/connexion">CONNEXION</Link> */}
            {/* Slider */}
            <div className='swiper w-full h-fit z-10 '>
                <div className='swiper-wrapper w-ull h-[700px]' >
                    <div className="swiper-slide w-full max-h-full">
                        <Image loading="lazy" src='/assurancenonvie.jpg' className='w-full h-full' alt='image1' height={10} width={700} />
                    </div>
                    <div className="swiper-slide w-full h-full" >
                        <Image loading="lazy" src='/assurancevie.jpg' className='w-full h-full' alt='image1' height={10} width={700} />
                    </div>
                </div>
                <div>

                </div>
                <div className="swiper-button-prev text-orange"></div>
                <div className="swiper-button-next text-orange rounded-xl nor"></div>
            </div>
        </div>
        </>
        

    )
}