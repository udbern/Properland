import { createClient } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: 'yp3zfpx8',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2022-03-07',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source)
}
