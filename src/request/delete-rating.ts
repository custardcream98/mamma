import { useAuthStore } from "@/store";
import { mammaApi } from "./axios";

const deleteRating = async (reviewId: string, restaurantId: number) => {
  const authStore = useAuthStore();

  try {
    await mammaApi.delete(`/rating`, {
      data: {
        reviewId,
        restaurantId,
      },
      headers: {
        authorization: `Bearer ${authStore.token}`,
      },
    });
  } catch (error) {
    console.error(error);
    alert("리뷰 삭제에 실패했습니다. 다시 시도해주세요.");
  }
};

export { deleteRating };
