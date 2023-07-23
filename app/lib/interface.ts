import { Image } from '~/shared/types';

export interface Project {
  title: string;
  subtitle: string;
  image: Image;
  _id: string;
  slug: {
    current: string;
  };
}
