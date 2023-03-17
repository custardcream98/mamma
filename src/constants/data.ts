import type { FilterType } from "@/types/data";

const SHEET_KEYS = [
  "등록순번",
  "종류",
  "상호",
  "블로그 링크",
  "메뉴",
  "가격(1인기준)",
  "위치",
  "아침",
  "점심",
  "저녁",
  "낯술",
  "1차",
  "2차",
  "이름",
  "공유자 평",
  "평균\n별점",
  "rowIndex",
] as const;

const RESTAURANT_TYPES = [
  "한식",
  "일식",
  "양식",
  "음료",
  "중식",
  "퓨전",
  "평냉",
  "치맥",
  "분식",
  "홍콩",
] as const;

const FILTER_TYPE_MAP: Record<FilterType, string> = {
  all: "전체",
  한식: "한식",
  일식: "일식",
  양식: "양식",
  음료: "음료",
  중식: "중식",
  퓨전: "퓨전",
  평냉: "평냉",
  치맥: "치맥",
  분식: "분식",
  홍콩: "홍콩",
} as const;

export { SHEET_KEYS, RESTAURANT_TYPES, FILTER_TYPE_MAP };
