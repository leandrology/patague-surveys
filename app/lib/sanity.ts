import { createClient } from 'next-sanity';

const projectId = 'yqpfyq62';
const dataset = 'production';
const apiVersion = '2023-01-01';

export const Client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
