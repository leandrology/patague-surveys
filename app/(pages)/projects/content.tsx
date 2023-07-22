'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import HeaderWidget from '../../../src/components/common/HeaderWidget';
import React, { useState } from 'react';
import { Controller } from 'swiper/modules';
import CallToAction from '~/components/widgets/CallToAction';
import { callToActionData2, faqs4Data } from '~/shared/data';
import { projectsData2 } from '~/shared/data';

const Content = () => {
  const { projects, header, isAfterContent } = projectsData2;

  return (
    <>
      <section className="bg-primary-50 dark:bg-slate-800">
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
            isAfterContent ? 'pb-16 pt-1 md:pb-20' : 'py-16 md:py-20'
          }`}
        >
          {header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}
          <div className="mx-auto max-w-7xl">
            <div className="self-center md:basis-1/2">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
              >
                {projects.map(({ title, subtitle, interval, image }, index) => (
                  <SwiperSlide key={index}>
                    <div className="ml-4">
                      {title && (
                        <h3 className="text-2xl font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                      )}
                      {subtitle && <p className="mb-5 mt-2 text-lg text-gray-600 dark:text-slate-400">{subtitle}</p>}
                    </div>
                    <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                      {image && (
                        <div className="relative m-auto max-w-4xl">
                          <Image
                            src={image.src}
                            width={100}
                            height={500}
                            alt={image.alt}
                            sizes="(max-width: 64rem) 100vw, 1024px"
                            className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                          />
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Content;
