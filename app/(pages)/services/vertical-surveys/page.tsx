import type { Metadata } from 'next';

import Image from 'next/image';
import heroImg from '~/assets/images/hero.jpg';

export const metadata: Metadata = {
  title: `Vertical Surveys`,
};

const Page = () => {
  return (
    <>
      <section className="bg-primary-50 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-1 text-center sm:px-6 md:pb-20 lg:px-8">
          <h1 className="text-4xl md:text-5xl">Vertical Surveys</h1>
          <div className="mx-auto max-w-7xl">
            <div className="self-center md:basis-1/2">
              <div className="ml-4">
                <h3 className="text-2xl font-medium leading-6 text-gray-900 dark:text-white">title here</h3>
                <p className="mb-5 mt-2 text-lg text-gray-600 dark:text-slate-400">sub here</p>
              </div>
              <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                <div className="relative m-auto max-w-4xl">
                  <Image
                    src={heroImg}
                    width={100}
                    height={500}
                    alt="Hero alt"
                    sizes="(max-width: 64rem) 100vw, 1024px"
                    className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
