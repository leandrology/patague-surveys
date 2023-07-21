import type { Metadata } from 'next';

import Features4 from '~/components/widgets/Features4';
import { featuresData3, hero2Data, statsData, faqsData } from '~/shared/data';

export const metadata: Metadata = {
  title: `Services`,
};



const Page = () => {
  return (
    <>
      <Features4 {...featuresData3} />
    </>
  );
};

export default Page;
