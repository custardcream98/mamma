import { TITLE_PROVIDER_KEY } from "@/constants/key";
import { inject } from "vue";

const useSetTitle = (title: string) => {
  const titleInjected = inject(TITLE_PROVIDER_KEY);
  if (!titleInjected) {
    throw new Error("Title provider not found");
  }

  titleInjected.setTitle(title);
};

export default useSetTitle;
