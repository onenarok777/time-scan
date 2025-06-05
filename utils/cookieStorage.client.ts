// utils/cookieStorage.ts
import Cookies from "js-cookie";

export const cookieStorage = {
  getItem: (key: string) => Cookies.get(key) || null,
  setItem: (key: string, value: string) =>
    Cookies.set(key, value, { expires: 7 }),
  removeItem: (key: string) => Cookies.remove(key),
};
