import type { RESTAURANT_TAGS, RESTAURANT_TYPES } from "@/constants/data";

type SheetResponse = Record<string, unknown>[];

type RestaurantTags = (typeof RESTAURANT_TAGS)[number];

type Review = {
  방문자: string;
  별점: number;
  uid?: string;
  reviewId?: string;
};

type RestaurantRawData = {
  등록순번: string;
  종류: RestaurantType;
  상호: string;
  메뉴: string;
  "가격(1인기준)": number;
  위치: string;
  "최초 공유자 이름": string;
  "공유자 평": string;
  "평균 별점": number;
  reviews: Review[];
} & Record<RestaurantTags, boolean>;

type RestaurantType = (typeof RESTAURANT_TYPES)[number];

type RestaurantMetaData = {
  id: number;
  name: string;
  type: RestaurantType;
  menu: string;
  price: number;
  location: string;
  reviewer: string;
  review: string;
  ratingAvg: number;
  tags: RestaurantTags[];
  ratings: Review[];
};

export type {
  Review,
  SheetResponse,
  RestaurantRawData,
  RestaurantType,
  RestaurantMetaData,
  RestaurantTags,
};
