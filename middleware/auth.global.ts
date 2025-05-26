import { useStoreAuth } from "~/stores/storeAuth";
import { navigateTo } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  const storeAuth = useStoreAuth();

  if (to.path === '/login') return;
  
  if (!storeAuth.isAuth) {
    return navigateTo('/login')
  }
});
