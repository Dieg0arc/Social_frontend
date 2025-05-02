// stores/auth.ts
import { defineStore } from 'pinia';
import type { LoginCredentials, RegisterData, User, AuthState } from '~/types/user';

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    token: null,
    loading: false,
    error: null,
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.user,
  },
  
  actions: {
    async login(credentials: LoginCredentials) {
      this.loading = true;
      this.error = null;
      
      try {
        // Aquí eventualmente llamarás a tu API
        // Por ahora simulamos una respuesta
        const response = await new Promise<{user: User, token: string}>((resolve) => {
          setTimeout(() => {
            resolve({
              user: {
                id: '1',
                username: credentials.email.split('@')[0],
                email: credentials.email,
                fullName: 'Usuario de Prueba',
                role: 'student',
                createdAt: new Date()
              },
              token: 'mock-jwt-token'
            });
          }, 1000);
        });
        
        this.user = response.user;
        this.token = response.token;
        
        // Guardar en localStorage para persistencia
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        return true;
      } catch (error) {
        this.error = 'Error de inicio de sesión. Verifica tus credenciales.';
        return false;
      } finally {
        this.loading = false;
      }
    },
    
    async register(data: RegisterData) {
      this.loading = true;
      this.error = null;
      
      try {
        // Aquí eventualmente llamarás a tu API
        // Por ahora simulamos una respuesta
        const response = await new Promise<{user: User, token: string}>((resolve) => {
          setTimeout(() => {
            resolve({
              user: {
                id: '1',
                username: data.username,
                email: data.email,
                fullName: data.fullName,
                role: 'student',
                createdAt: new Date()
              },
              token: 'mock-jwt-token'
            });
          }, 1000);
        });
        
        this.user = response.user;
        this.token = response.token;
        
        // Guardar en localStorage para persistencia
        localStorage.setItem('auth_token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        
        return true;
      } catch (error) {
        this.error = 'Error en el registro. Inténtalo de nuevo.';
        return false;
      } finally {
        this.loading = false;
      }
    },
    
    logout() {
      this.user = null;
      this.token = null;
      
      // Eliminar datos de localStorage
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    },
    
    initAuth() {
      // Recuperar datos del localStorage al iniciar la aplicación
      const token = localStorage.getItem('auth_token');
      const userStr = localStorage.getItem('user');
      
      if (token && userStr) {
        try {
          this.token = token;
          this.user = JSON.parse(userStr);
        } catch (e) {
          this.logout();
        }
      }
    }
  }
});