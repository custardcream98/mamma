import { WAVVE_EMAIL_DOMAIN } from "@/constants/auth";
import { fireauth } from "@/lib/firebase";
import { useGetRestaurantsDataQuery } from "@/request";
import type { User } from "@firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";

const useAuthStore = defineStore("firebase-auth", () => {
  const auth = ref<User | null>(null);
  const token = ref<string | null>(null);
  const { refetch } = useGetRestaurantsDataQuery();

  fireauth.onAuthStateChanged(async (user) => {
    if (user?.email?.endsWith(WAVVE_EMAIL_DOMAIN)) {
      auth.value = user;
      token.value = await user.getIdToken();
    } else {
      auth.value = null;
    }
    await refetch();
  });

  return {
    auth,
    token,
  };
});

export { useAuthStore };
