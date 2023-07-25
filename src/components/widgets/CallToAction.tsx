import { CallToActionProps, CallToAction } from '~/shared/types';
import CTA from '../common/CTA';
import Reveal from '../atoms/Reveal';
import RevealEase from '../atoms/RevealEase';
import RevealLeft from '../atoms/RevealLeft';

const CallToAction = (props: { data: CallToActionProps }) => {
  const { title, subtitle, callToAction } = props.data;
  const { text, href } = callToAction as CallToAction;

  return (
    <section className="bg-primary-50 dark:bg-slate-800" id="callToActionOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="pb-12 pt-4 md:pb-20 md:pt-12">
          <div className="card mx-auto max-w-3xl p-6 text-center">
            <Reveal>
              <div>
                {title && (
                  <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl">
                    {title}
                  </h2>
                )}
              </div>
            </Reveal>
            <RevealEase>
              <div>{subtitle && <p className="text-xl text-gray-600 dark:text-slate-400">{subtitle}</p>}</div>
            </RevealEase>
            <RevealLeft>
              <div>
                {text && href && (
                  <div className="mt-6 sm:mx-auto sm:w-fit">
                    <CTA data={callToAction as CallToAction} />
                  </div>
                )}
              </div>
            </RevealLeft>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
