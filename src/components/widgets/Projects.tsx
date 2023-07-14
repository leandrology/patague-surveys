'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps, ProjectProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import { projectsData } from '~/shared/data';

const Projects = () => {
  const { projects, header, isAfterContent } = projectsData;

  return (
    <>
      <section className="bg-primary-50 dark:bg-slate-800">
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
            isAfterContent ? 'pb-16 pt-1 md:pb-20' : 'py-16 md:py-20'
          }`}
        >
          {header && <HeaderWidget header={header} titleClassname="text-3xl sm:text-5xl" />}
          <div className="mx-auto max-w-7xl">
            <div className="self-center md:basis-1/2">
              <Swiper modules={[Autoplay]} autoplay slidesPerView={1}>
                {projects.map(({ title, subtitle, interval, image }, index) => (
                  <SwiperSlide key={index}>
                    <div className="ml-4">
                      {title && (
                        <h3 className="text-2xl font-medium leading-6 text-gray-900 dark:text-white">{title}</h3>
                      )}
                      {subtitle && (
                        <p className="mb-5 mt-2 text-lg text-gray-600 dark:text-slate-400">
                          <a href="/projects">{`${subtitle.slice(0, 200)}...`}</a>
                        </p>
                      )}
                    </div>
                    <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                      {image && (
                        <div className="relative m-auto max-w-4xl">
                          <Link href="/projects">
                            <Image
                              src={image.src}
                              width={100}
                              height={500}
                              alt={image.alt}
                              sizes="(max-width: 64rem) 100vw, 1024px"
                              className="mx-auto h-auto w-full scale-90 cursor-pointer rounded-md bg-gray-400 object-cover transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 dark:bg-slate-700"
                            />
                          </Link>
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

export default Projects;
