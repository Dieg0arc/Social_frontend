/**
 * Archivo: user.ts
 * Ubicación: types/user.ts
 * Descripción: Definición de interfaces para el manejo de usuarios y autenticación en la aplicación.
 * Este archivo contiene las estructuras de datos principales relacionadas con los usuarios,
 * credenciales de acceso y estado de autenticación.
 */

/**
 * Interfaz que define la estructura de un usuario en el sistema
 */
export interface User {
  id: string; // Identificador único del usuario
  username: string; // Nombre de usuario único
  email: string; // Correo electrónico del usuario
  fullName: string; // Nombre completo del usuario
  role: "student" | "teacher" | "admin"; // Rol del usuario con valores específicos permitidos
  profilePicture?: string; // URL de la imagen de perfil (opcional)
  createdAt: Date; // Fecha de creación de la cuenta
}

/**
 * Interfaz que define la estructura de las credenciales para iniciar sesión
 */
export interface LoginCredentials {
  email: string; // Correo electrónico para la autenticación
  password: string; // Contraseña del usuario
}

/**
 * Interfaz que extiende las credenciales básicas con datos adicionales para el registro
 * Hereda todas las propiedades de LoginCredentials
 */
export interface RegisterData extends LoginCredentials {
  username: string; // Nombre de usuario único elegido durante el registro
  fullName: string; // Nombre completo del usuario
}

/**
 * Interfaz que define la estructura del estado de autenticación
 * Utilizada para gestionar el estado global de autenticación en la aplicación
 */
export interface AuthState {
  user: User | null; // Usuario autenticado o null si no hay sesión activa
  token: string | null; // Token JWT de autenticación o null si no hay sesión
  loading: boolean; // Indicador de proceso de carga/petición en curso
  error: string | null; // Mensaje de error si la autenticación falla o null
}
