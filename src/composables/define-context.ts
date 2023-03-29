import {
  inject as vueInject,
  provide as vueProvide,
  type InjectionKey,
} from "vue";

const defineContext = <T>(
  _initialValue: T,
  key?: symbol | string | InjectionKey<T>,
) => {
  const CONTEXT_KEY = key || Symbol();

  const inject = Object.assign(
    () => {
      const context = vueInject(CONTEXT_KEY);
      if (!context) {
        throw new Error("No context provided");
      }
      return context;
    },
    { key: CONTEXT_KEY },
  );
  const provide = Object.assign(
    (initialValue: T = _initialValue) => {
      vueProvide(CONTEXT_KEY, initialValue);
    },
    {
      key: CONTEXT_KEY,
    },
  );

  return {
    inject,
    provide,
    key: CONTEXT_KEY,
  };
};

const defineGenericContext = <T>(key?: symbol | string | InjectionKey<T>) => {
  return defineContext<T>(null as T, key);
};

export { defineContext, defineGenericContext };
