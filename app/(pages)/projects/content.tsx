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
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { groq } from 'next-sanity';
import { Client } from 'app/lib/sanity';
import { urlFor } from 'app/lib/sanityImageUrl';
import Reveal from '~/components/atoms/Reveal';
import RevealDown from '~/components/atoms/RevealDown';
import RevealEase from '~/components/atoms/RevealEase';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
}

const Content = () => {
  const { projects, header, isAfterContent } = projectsData2;

  const { isLoading, error, data } = useQuery('project', async () => {
    return Client.fetch(groq`*[_type == "project"]`);
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error </div>;
  }

  return (
    <>
      <section className="bg-primary-50 dark:bg-slate-800">
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${
            isAfterContent ? 'pb-16 pt-1 md:pb-20' : 'py-16 md:py-20'
          }`}
        >
          <Reveal>
            <div>{header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}</div>
          </Reveal>
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
                {data.map((project: any) => (
                  <SwiperSlide key={project._id}>
                    <RevealDown>
                      <div className="ml-4">
                        {project.title && (
                          <h3 className="text-2xl font-medium leading-6 text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                        )}
                        {project.subtitle && (
                          <p className="mb-5 mt-2 text-lg text-gray-600 dark:text-slate-400">{project.subtitle}</p>
                        )}
                      </div>
                    </RevealDown>
                    <RevealEase>
                      <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                        {project.image && (
                          <div className="relative m-auto max-w-4xl">
                            <Image
                              src={urlFor(project.image).url()}
                              width={100}
                              height={100}
                              alt={project.title}
                              sizes="(max-width: 64rem) 100vw, 1024px"
                              className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                            />
                          </div>
                        )}
                      </div>
                    </RevealEase>
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
