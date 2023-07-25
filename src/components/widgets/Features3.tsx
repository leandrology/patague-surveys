import { FeaturesProps } from '~/shared/types';
import HeaderWidget from '../common/HeaderWidget';
import Reveal from '../atoms/Reveal';
import RevealLeft from '../atoms/RevealLeft';
import RevealEase from '../atoms/RevealEase';
import RevealRight from '../atoms/RevealRight';

const Features3 = ({ header, items }: FeaturesProps) => (
  <section className="scroll-mt-16" id="features3">
    <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      <Reveal>
        <div>{header && <HeaderWidget header={header} titleClassname="text-4xl md:text-5xl" />}</div>
      </Reveal>
      <div className="mb-0 grid grid-cols-3 items-start gap-6 dark:text-white sm:grid-cols-2 md:my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {items.map(({ title, description, icon: Icon, link }, index) => (
          <div
            key={`item-feature3-${index}`}
            className="col-span-3 pb-6 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"
          >
            <div className="flex-flow flex">
              <div className="mb-4 mr-4">
                <RevealRight>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-900">
                    {Icon && <Icon className="h-6 w-6 text-white dark:text-slate-200" />}
                  </div>
                </RevealRight>
              </div>
              <div className="flex flex-col justify-between">
                <>
                  <RevealLeft>
                    <h3 className="mb-3 text-xl font-bold">{title}</h3>
                  </RevealLeft>
                  <RevealEase>
                    <p className="text-gray-600 dark:text-slate-400">{description}</p>
                  </RevealEase>
                </>
                {link && (
                  <div className="pt-2">
                    <RevealLeft>
                      <a className="flex font-bold text-blue-600 hover:underline dark:text-gray-200" href={link.href}>
                        {link.label}
                      </a>
                    </RevealLeft>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features3;
