import type {
  OPTIONAL_SHEET_KEYS,
  RESTAURANT_TAGS,
  RESTAURANT_TYPES,
  SHEET_KEYS,
} from "@/constants/data";

type SheetResponse = Record<string, unknown>[];

type RestaurantTags = (typeof RESTAURANT_TAGS)[number];
type SheetKeys = (typeof SHEET_KEYS)[number];
type OptionalSheetKeys = (typeof OPTIONAL_SHEET_KEYS)[number];

type RestaurantRawData = Record<SheetKeys, string> &
  Record<RestaurantTags, "O" | ""> &
  Partial<Record<OptionalSheetKeys, string>> & {
    종류: RestaurantType;
  };

type RestaurantType = (typeof RESTAURANT_TYPES)[number];

type Rating = {
  rater: string;
  rating: number;
};

type RestaurantMetaData = {
  id: number;
  name: string;
  type: RestaurantType;
  menu: string;
  price: string;
  location: string;
  reviewer: string;
  review: string;
  ratingAvg: number;
  tags: RestaurantTags[];
  ratings: Rating[];
};

export type {
  Rating,
  SheetResponse,
  RestaurantRawData,
  RestaurantType,
  RestaurantMetaData,
  RestaurantTags,
};
