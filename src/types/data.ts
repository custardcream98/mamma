import type { RESTAURANT_TYPES } from "@/constants/data";

type SheetResponse = {
  hasNextPage: boolean;
  results: object[];
};

type RestaurantRawData = {
  등록순번: string;
  상호: string;
  종류: RestaurantType;
  메뉴: string;
  "가격(1인기준)": string;
  위치: string;
  이름: string;
  "공유자 평": string;
  "평균\n별점": string;
};

type RestaurantType = (typeof RESTAURANT_TYPES)[number];

export type { SheetResponse, RestaurantRawData, RestaurantType };
