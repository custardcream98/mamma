import { PATH, type PathType } from "@/constants/route";
import { useRouter } from "vue-router";

const useRouteTo = (to: PathType) => {
  const router = useRouter();

  const routeTo = () => {
    router.push({
      path: PATH[to],
    });
  };

  return { routeTo };
};

export default useRouteTo;
