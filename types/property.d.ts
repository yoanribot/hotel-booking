export type Property = {
  id: string;
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
};