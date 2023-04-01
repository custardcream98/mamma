import { googleSheetApi } from "./axios";

const deleteRating = async (reviewId: string, restaurantId: number) => {
  try {
    await googleSheetApi.delete(`/rating`, {
      data: {
        reviewId,
        restaurantId,
      },
    });
  } catch (error) {
    console.error(error);
    alert("리뷰 삭제에 실패했습니다. 다시 시도해주세요.");
  }
};

export { deleteRating };
