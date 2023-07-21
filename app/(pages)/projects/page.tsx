import type { Metadata } from 'next';
import Content from './content';

export const metadata: Metadata = {
  title: `Projects`,
};
const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
