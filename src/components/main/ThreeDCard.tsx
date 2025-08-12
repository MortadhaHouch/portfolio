"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
export function ThreeDCard({images}:{images?:string[]}) {
    return (
        <CardContainer containerClassName="w-[clamp(300px,33%,350px)]" className="inter-var py-2 w-[clamp(300px,33%,350px)] h-[clamp(300px,30%,350px)]">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-gray-700 border-black/[0.1] w-[clamp(300px,30%,350px)] h-[clamp(300px,30%,350px)] rounded-2xl p-6 border transition-colors duration-300">
                <CardItem translateZ="100" className="w-full mt-4">
                    {
                        images && (
                            <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{dynamicBullets: true,clickable:true}}
                            scrollbar={{ draggable: true }}
                            navigation={{enabled:true}}
                            modules={[EffectCoverflow, Pagination,Autoplay]}
                                className="flex flex-row justify-center items-center"
                            >
                                {
                                    images.map((image,index) => (
                                        <SwiperSlide key={index}>
                                            <Image loading="lazy"
                                                key={index}
                                                src={image}
                                                height={250}
                                                width={250}
                                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl aspect-square"
                                                alt="thumbnail"
                                            />
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        )
                    }
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
