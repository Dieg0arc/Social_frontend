// composables/useAuth.ts
import { useAuthStore } from '~/stores/auth';
import type { LoginCredentials, RegisterData } from '~/types/user';
import { useRouter } from '#app';
import { computed } from 'vue';

export function useAuth() {
  const authStore = useAuthStore();
  const router = useRouter();
  
  const login = async (credentials: LoginCredentials) => {
    const success = await authStore.login(credentials);
    if (success) {
      router.push('/');
    }
    return success;
  };
  
  const register = async (data: RegisterData) => {
    const success = await authStore.register(data);
    if (success) {
      router.push('/');
    }
    return success;
  };
  
  const logout = () => {
    authStore.logout();
    router.push('/login');
  };
  
  return {
    user: computed(() => authStore.user),
    isAuthenticated: computed(() => authStore.isAuthenticated),
    loading: computed(() => authStore.loading),
    error: computed(() => authStore.error),
    login,
    register,
    logout
  };
}