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

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { groq } from 'next-sanity';
import { Client } from 'app/lib/sanity';
import { urlFor } from 'app/lib/sanityImageUrl';
import Reveal from '../atoms/Reveal';
import RevealDown from '../atoms/RevealDown';
import RevealEase from '../atoms/RevealEase';

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Projects />
    </QueryClientProvider>
  );
}

const Projects = () => {
  const { projects, header, isAfterContent } = projectsData;

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
              <Swiper modules={[Autoplay]} autoplay slidesPerView={1}>
                {/* {projects.map(({ title, subtitle, interval, image }, index) => ( */}
                {data.slice(0, 3).map((project: any) => (
                  <SwiperSlide key={project._id}>
                    <RevealDown>
                      <div className="ml-4">
                        {project.title && (
                          <h3 className="text-2xl font-medium leading-6 text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                        )}
                        {project.subtitle && (
                          <p className="mb-5 mt-2 text-lg text-gray-600 dark:text-slate-400">
                            <a href="/projects">{`${project.subtitle.slice(0, 200)}...`}</a>
                          </p>
                        )}
                      </div>
                    </RevealDown>
                    <RevealEase>
                      <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                        {project.image && (
                          <div className="relative m-auto max-w-4xl">
                            <Link href="/projects">
                              <Image
                                src={urlFor(project.image).url()}
                                width={100}
                                height={100}
                                alt={project.title}
                                sizes="(max-width: 64rem) 100vw, 1024px"
                                className="mx-auto h-auto w-full scale-90 cursor-pointer rounded-md bg-gray-400 object-cover transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 dark:bg-slate-700"
                              />
                            </Link>
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

// export default Projects;
