import { googleSheetApi } from "@/request/axios";
import type { CreatedReview } from "@/types/review";

const handleSubmitRating = async ({
  restaurantId,
  name,
  rating,
  uid,
}: CreatedReview) => {
  try {
    await googleSheetApi.post("/rating", {
      restaurantId,
      name,
      rating,
      uid,
    });
  } catch (error) {
    console.error(error);
    alert("리뷰 등록에 실패했습니다. 다시 시도해주세요.");
  }
};

export { handleSubmitRating };
