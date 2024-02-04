import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  try {
    const { url } = media.data.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
  } catch (error) {
    return "";
  }
}
