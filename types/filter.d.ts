export interface IFilter {

}

export type FilterOption = {
  [key: string]: string,
}

export type FilterOptions = FilterOption & {
  purpose: string;
  minPrice: string;
  maxPrice: string;
  rentFrequency: string;
  roomsMin: string;
  bathsMin: string;
  areaMax: string;
  locationExternalIDs: string;
  sort: string;
  categoryExternalID: string;
};