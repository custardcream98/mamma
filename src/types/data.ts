import type {
  RESTAURANT_TAGS,
  RESTAURANT_TYPES,
  SHEET_KEYS,
} from "@/constants/data";

type SheetResponse = {
  hasNextPage: boolean;
  results: object[];
};

type RestaurantTags = (typeof RESTAURANT_TAGS)[number];
type SheetKeys = (typeof SHEET_KEYS)[number];

type RestaurantRawData = Record<SheetKeys, string> &
  Record<RestaurantTags, "O" | ""> & {
    종류: RestaurantType;
  };

type RestaurantType = (typeof RESTAURANT_TYPES)[number];

type RestaurantMetaData = {
  id: number;
  name: string;
  type: RestaurantType;
  menu: string;
  price: string;
  location: string;
  reviewer: string;
  review: string;
  rating: number;
  tags: RestaurantTags[];
};

export type {
  SheetResponse,
  RestaurantRawData,
  RestaurantType,
  RestaurantMetaData,
  RestaurantTags,
};
