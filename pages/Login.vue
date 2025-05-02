<!-- pages/login.vue -->
<template>
  <div class="login-container">
    <div class="background-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
    </div>
    
    <div class="login-card">
      <div class="card-header">
        <div class="title-wrapper">
          <h1 class="app-title">SocialCue</h1>
          <img src="~/assets/images/OnlyLogo_Tp.png" alt="Logo Humboldt" class="title-logo" />
        </div>
        <p class="app-subtitle">Tu red social del conocimiento</p>
      </div>
      
      <div class="card-content">
        <div class="card-left">
          <img src="~/assets/images/LoginLogo.png" alt="RedCue Logo" class="login-image" />
        </div>
        
        <div class="card-right">
          <LoginForm 
            @login-attempt="handleLoginAttempt"
            @login-success="handleLoginSuccess"
            @login-error="handleLoginError"
          />
        </div>
      </div>

      <div class="register-prompt">
        <p>¿Nuevo en RedCue? <NuxtLink to="/register" class="register-link">Crear una cuenta</NuxtLink></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from '~/components/auth/LoginForm.vue';
import { useRouter } from '#app';

const router = useRouter();

// Tipos para el formulario de login
interface LoginFormData {
  email: string;
  password: string;
}

// Manejadores de eventos del formulario
const handleLoginAttempt = (formData: LoginFormData) => {
  console.log('Intento de login con:', formData);
};

const handleLoginSuccess = () => {
  console.log('Login exitoso, redirigiendo...');
  router.push('/');
};

const handleLoginError = (error: unknown) => {
  console.error('Error en login:', error);
};
</script>

<style>
@import '~/assets/css/login.css';
</style>