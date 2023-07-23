import ImageUrlBuilder from '@sanity/image-url'
import { Client } from "./sanity";

const builder = ImageUrlBuilder(Client)

export function urlFor(source: any) {
    return builder.image(source);
}