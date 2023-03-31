const RESTAURANT_TAGS = ["아침", "점심", "저녁", "낮술", "1차", "2차"] as const; // "낯술" is a typo in the original code

const SHEET_KEYS = [
  ...RESTAURANT_TAGS,
  "등록순번",
  "종류",
  "상호",
  "메뉴",
  "가격(1인기준)",
  "위치",
  "최초 공유자 이름",
  "공유자 평",
  "평균 별점",
  "reviews",
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

export { RESTAURANT_TAGS, SHEET_KEYS, RESTAURANT_TYPES };
