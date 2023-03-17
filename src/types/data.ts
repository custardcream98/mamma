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

type RestaurantType =
  | "한식"
  | "일식"
  | "양식"
  | "음료"
  | "중식"
  | "퓨전"
  | "평냉"
  | "치맥"
  | "분식"
  | "홍콩";

type FilterType = "all" | RestaurantType;

export type { SheetResponse, RestaurantRawData, RestaurantType, FilterType };
