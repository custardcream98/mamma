import { WAVVE_EMAIL_DOMAIN } from "@/constants/auth";
import { fireauth } from "@/lib/firebase";
import type { User } from "@firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";

const useAuthStore = defineStore("firebase-auth", () => {
  const auth = ref<User | null>(null);

  fireauth.onAuthStateChanged((user) => {
    if (user?.email?.endsWith(WAVVE_EMAIL_DOMAIN)) {
      auth.value = user;
    } else {
      auth.value = null;
    }
  });

  return {
    auth,
  };
});

export { useAuthStore };
