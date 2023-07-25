import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import Reveal from '../atoms/Reveal';
import RevealEase from '../atoms/RevealEase';
import RevealRight from '../atoms/RevealRight';
import RevealLeft from '../atoms/RevealLeft';

const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, callToAction2, image } = props.data;
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {title && (
              <Reveal>
                <h1 className="leading-tighter font-heading mb-6 text-5xl font-bold tracking-tighter md:text-6xl">
                  {title}
                </h1>
              </Reveal>
            )}

            <div className="mx-auto max-w-3xl">
              <RevealEase>
                <div>
                  {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
                </div>
              </RevealEase>
              <RevealLeft>
                <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                  {callToAction && <CTA data={callToAction} />}
                  {callToAction2 && <CTA data={callToAction2} />}
                </div>
              </RevealLeft>
            </div>
          </div>
          {image && (
            <div className="relative m-auto max-w-5xl">
              <RevealRight>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"
                  placeholder="blur"
                  loading="eager"
                  priority
                  sizes="(max-width: 64rem) 100vw, 1024px"
                />
              </RevealRight>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
