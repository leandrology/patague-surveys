import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
// import SocialProof from '../src/components/widgets/SocialProof';
import Features3 from '~/components/widgets/Features3';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonial from '~/components/widgets/Testimonial';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  callToActionData,
  faqsData2,
  featuresData,
  heroData,
  pricingData,
  projectsData,
  socialProofData,
} from '~/shared/data';
import Contact from '~/components/widgets/Contact';
import Projects from '~/components/widgets/Projects';
export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero data={heroData} />

      {/* <SocialProof {...socialProofData} /> */}
      <Features3 {...featuresData} />
      <Projects />
      <Steps />
      <Testimonial />
      <Team />
      <FAQs2 {...faqsData2} />

      {/* <Contact /> */}
      <CallToAction2 {...callToActionData} />
    </>
  );
}
