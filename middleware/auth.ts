// middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo } from '#app'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();
  
  // Si la ruta es / o /login o /register, no hacemos nada
  if (to.path === '/' || to.name === 'login' || to.name === 'register') {
    // Si está autenticado y va a login o register, redireccionamos a dashboard
    if (authStore.isAuthenticated) {
      return navigateTo('/dashboard');
    }
    // Si no está autenticado, permitimos acceso a estas rutas
    return;
  }
  
  // Para cualquier otra ruta, verificamos autenticación
  if (!authStore.isAuthenticated) {
    return navigateTo('/login');
  }
  
  return;
});