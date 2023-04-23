import { useAuthStore } from "@/store";
import { isRawResponse } from "@/types/guards/isRawResponse";
import { mammaApi } from "./axios";

const getRawData = async () => {
  const authStore = useAuthStore();

  const response = authStore.auth
    ? await mammaApi.get(`/`, {
        headers: {
          Authorization: `Bearer ${authStore.token}`,
        },
      })
    : await mammaApi.get(`/`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch data from Backend");
  }

  if (!isRawResponse(response.data)) {
    throw new Error("Invalid data from Backend");
  }

  return response.data;
};

export { getRawData };
