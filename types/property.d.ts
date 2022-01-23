export type Property = {
  id: string;
  description: string,
  coverPhoto: { url: string };
  price: number;
  rentFrequency: string;
  rooms: string;
  title: string;
  baths: string;
  area: number;
  agency: { logo: { url: string } };
  isVerified: string;
  externalID: string;
  type: string,
  purpose: string,
  furnishingStatus: string,
  amenities: { amenities: {text: string }[] }[],
  photos: { id: string, url: string }[],
};