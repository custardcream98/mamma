const RESTAURANT_TAGS = ["아침", "점심", "저녁", "낯술", "1차", "2차"] as const; // "낯술" is a typo in the original code

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

const OPTIONAL_SHEET_KEYS = [
  "블로그 링크",
  "방문자1",
  "별점1",
  "방문자2",
  "별점2",
  "방문자3",
  "별점3",
  "방문자4",
  "별점4",
  "방문자5",
  "별점5",
  "방문자6",
  "별점6",
  "방문자7",
  "별점7",
  "방문자8",
  "별점8",
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

export { OPTIONAL_SHEET_KEYS, RESTAURANT_TAGS, SHEET_KEYS, RESTAURANT_TYPES };
