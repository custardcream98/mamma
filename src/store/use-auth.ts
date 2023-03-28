import { fireauth } from "@/lib/firebase";
import type { User } from "@firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";

const useAuth = defineStore("firebase-auth", () => {
  const auth = ref<User | null>(null);

  fireauth.onAuthStateChanged((user) => {
    auth.value = user;
  });

  return {
    auth,
  };
});

export { useAuth };
