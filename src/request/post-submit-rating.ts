import { googleSheetApi } from "@/request/axios";
import { useAuthStore } from "@/store/use-auth";
import type { CreatedReview } from "@/types/review";

const postRating = async ({
  restaurantId,
  name,
  rating,
  uid,
}: CreatedReview) => {
  const authStore = useAuthStore();

  try {
    await googleSheetApi.post(
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
