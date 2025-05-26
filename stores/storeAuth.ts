export const useStoreAuth = defineStore("store-auth", {
  state: () => ({
    isAuth: false,
    isTokenAccess: null as string | null,
  }),
  persist: [
    {
      key: "auth",
      storage: localStorage,
    },
    {
      key: "auth",
      storage: cookieStorage,
    },
  ],
});
