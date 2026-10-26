import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'work'>;

export const slugOf = (w: Work) => w.id.replace(/^\d+-/, '');

export async function allWork() {
  return (await getCollection('work')).sort((a, b) => a.data.order - b.data.order);
}
