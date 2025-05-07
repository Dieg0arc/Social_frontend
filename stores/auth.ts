/**
 * Archivo: auth.ts
 * Ubicación: stores/auth.ts
 * Descripción: Store de autenticación utilizando Pinia para la gestión del estado
 * de autenticación en la aplicación SocialCue.
 */

// Importación de la función para definir stores de Pinia
import { defineStore } from "pinia";
// Importación de los tipos relacionados con la autenticación
import type {
  LoginCredentials,
  RegisterData,
  User,
  AuthState,
} from "~/types/user";

/**
 * Store de autenticación que gestiona el estado y las acciones relacionadas
 * con la autenticación de usuarios en la aplicación.
 */
export const useAuthStore = defineStore("auth", {
  /**
   * Estado inicial del store de autenticación
   * @returns Estado inicial con valores por defecto
   */
  state: (): AuthState => ({
    user: null, // Información del usuario autenticado
    token: null, // Token JWT de autenticación
    loading: false, // Indicador de peticiones en curso
    error: null, // Mensaje de error en procesos de autenticación
  }),

  /**
   * Getters computados para acceder al estado de forma conveniente
   */
  getters: {
    /**
     * Verifica si hay un usuario autenticado actualmente
     * @param state - Estado actual del store
     * @returns Boolean indicando si hay un token válido
     */
    isAuthenticated: (state) => !!state.token,

    /**
     * Obtiene la información del usuario actual
     * @param state - Estado actual del store
     * @returns Objeto User o null si no hay usuario autenticado
     */
    getUser: (state) => state.user,
  },

  /**
   * Acciones para modificar el estado y realizar operaciones de autenticación
   */
  actions: {
    /**
     * Inicia sesión con credenciales de usuario
     * @param credentials - Objeto con email y password
     * @returns Promise<boolean> indicando si el login fue exitoso
     */
    async login(credentials: LoginCredentials) {
      this.loading = true;
      this.error = null;

      try {
        // Aquí eventualmente llamarás a tu API
        // Por ahora simulamos una respuesta
        const response = await new Promise<{ user: User; token: string }>(
          (resolve) => {
            setTimeout(() => {
              resolve({
                user: {
                  id: "1",
                  username: credentials.email.split("@")[0],
                  email: credentials.email,
                  fullName: "Usuario de Prueba",
                  role: "student",
                  createdAt: new Date(),
                },
                token: "mock-jwt-token",
              });
            }, 1000);
          }
        );

        // Actualiza el estado con la información de usuario y token
        this.user = response.user;
        this.token = response.token;

        // Guardar en localStorage para persistencia entre sesiones
        localStorage.setItem("auth_token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        return true;
      } catch (error) {
        this.error = "Error de inicio de sesión. Verifica tus credenciales.";
        return false;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Registra un nuevo usuario en el sistema
     * @param data - Datos del nuevo usuario
     * @returns Promise<boolean> indicando si el registro fue exitoso
     */
    async register(data: RegisterData) {
      this.loading = true;
      this.error = null;

      try {
        // Aquí eventualmente llamarás a tu API
        // Por ahora simulamos una respuesta
        const response = await new Promise<{ user: User; token: string }>(
          (resolve) => {
            setTimeout(() => {
              resolve({
                user: {
                  id: "1",
                  username: data.username,
                  email: data.email,
                  fullName: data.fullName,
                  role: "student",
                  createdAt: new Date(),
                },
                token: "mock-jwt-token",
              });
            }, 1000);
          }
        );

        // Actualiza el estado con la información de usuario y token
        this.user = response.user;
        this.token = response.token;

        // Guardar en localStorage para persistencia entre sesiones
        localStorage.setItem("auth_token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        return true;
      } catch (error) {
        this.error = "Error en el registro. Inténtalo de nuevo.";
        return false;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Cierra la sesión del usuario actual
     * Elimina los datos del usuario y el token tanto del estado como del localStorage
     */
    logout() {
      this.user = null;
      this.token = null;

      // Eliminar datos de localStorage
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
    },

    /**
     * Inicializa el estado de autenticación desde localStorage
     * Se utiliza al cargar la aplicación para restaurar la sesión del usuario
     */
    initAuth() {
      // Recuperar datos del localStorage al iniciar la aplicación
      const token = localStorage.getItem("auth_token");
      const userStr = localStorage.getItem("user");

      if (token && userStr) {
        try {
          this.token = token;
          this.user = JSON.parse(userStr);
        } catch (e) {
          // Si hay un error al procesar los datos almacenados, cierra la sesión
          this.logout();
        }
      }
    },
  },
});
