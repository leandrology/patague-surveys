'use client';
import Image from 'next/image';
import { teamData } from '~/shared/data';
import HeaderWidget from '../common/HeaderWidget';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Reveal from '../atoms/Reveal';
import RevealEase from '../atoms/RevealEase';
import RevealDown from '../atoms/RevealDown';
import RevealLeft from '../atoms/RevealLeft';
import RevealRight from '../atoms/RevealRight';
const Team = () => {
  const { header, teams } = teamData;

  return (
    <section id="team">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div>{header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}</div>
        </Reveal>
        <Swiper
          modules={[Autoplay]}
          autoplay
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
        >
          <div className="flex items-stretch justify-center">
            <div className="grid grid-cols-1 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
              {teams.map(({ name, occupation, image, items }, index) => (
                <SwiperSlide key={index}>
                  <div key={`item-team-${index}`} className="p-2">
                    <RevealDown>
                      <div>
                        <Image
                          src={image.src}
                          width={1080}
                          height={720}
                          alt={image.alt}
                          className="mx-auto flex h-72 w-60 rounded-md object-cover md:ml-0"
                          // className="h-auto w-auto flex rounded-md object-cover"
                        />
                      </div>
                    </RevealDown>
                    <div className="relative mt-3 text-center">
                      <RevealLeft>
                        <h3 className="mb-1.5 text-xl font-bold">{name}</h3>
                      </RevealLeft>
                      <RevealRight>
                        <div>
                          <p className="mb-7 text-base font-medium capitalize text-gray-600 dark:text-slate-400">
                            {occupation}
                          </p>
                        </div>
                      </RevealRight>
                      <ul className="absolute right-[-5px] top-[-290px] block list-none rounded-md bg-white/70 shadow-[0_0_8px_rgba(0,0,0,0.2)] backdrop-blur-sm dark:bg-white/40">
                        {items &&
                          items.map(
                            ({ title, href, icon: Icon }, index2) =>
                              Icon &&
                              href && (
                                <li
                                  key={`team-${index2}`}
                                  className="m-1 flex items-center justify-center rounded text-primary-700 hover:text-gray-500"
                                >
                                  <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={title as string}
                                    className="flex items-center justify-center rounded-sm bg-transparent p-0.5 text-primary-900 hover:bg-primary-900 hover:text-slate-200 hover:dark:bg-slate-800 hover:dark:text-slate-200"
                                  >
                                    <Icon className="h-6 w-6 p-0.5" />
                                  </a>
                                </li>
                              ),
                          )}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Team;
