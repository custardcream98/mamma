import { useAuthStore } from "@/store";
import type { CreatedReview } from "@/types/review";
import { mammaApi } from "../axios";

const postRating = async ({
  restaurantId,
  name,
  rating,
  uid,
}: CreatedReview) => {
  const authStore = useAuthStore();

  try {
    await mammaApi.post(
      "/rating",
      { restaurantId, name, rating, uid },
      {
        headers: {
          authorization: `Bearer ${authStore.token}`,
        },
      },
    );
  } catch (error) {
    console.error(error);
    alert("리뷰 등록에 실패했습니다. 다시 시도해주세요.");
  }
};

export { postRating };
