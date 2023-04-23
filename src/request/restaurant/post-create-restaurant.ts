import { useAuthStore } from "@/store";
import type { CreatedRestaurant } from "@/types/data";
import type { CreateRestaurantPostResponse } from "@/types/request";
import { mammaApi } from "../axios";

const createRestaurant = async ({
  name,
  type,
  menu,
  price,
  review,
  location,
  tags,
  rating,
}: CreatedRestaurant) => {
  const authStore = useAuthStore();

  try {
    return await mammaApi.post<CreateRestaurantPostResponse>(
      "/restaurant",
      {
        uid: authStore.auth?.uid,
        name,
        type,
        menu,
        price,
        review,
        location,
        tags,
        rating,
        creator: authStore.auth?.displayName,
      },
      {
        headers: {
          authorization: `Bearer ${authStore.token}`,
        },
      },
    );
  } catch (error) {
    console.error(error);
    alert("레스토랑 등록에 실패했습니다. 다시 시도해주세요.");
  }
};

export { createRestaurant };
