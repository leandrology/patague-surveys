import { Client } from 'app/lib/sanity';
import { Project } from 'app/lib/interface';
import { use } from 'react';

async function getData() {
  const query = `* [_type=='project']`;
  const data = await Client.fetch(query);

  return data;
}

export default async function Data() {
  const data = (await getData()) as Project[];
  return data;

}
