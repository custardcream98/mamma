import type { InjectionKey, Ref } from "vue";

type TitleProvider = {
  title: Readonly<Ref<string>>;
  setTitle: (title: string) => void;
};
export const TITLE_PROVIDER_KEY: InjectionKey<TitleProvider> =
  Symbol("title-provider");
