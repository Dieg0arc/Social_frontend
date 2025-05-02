<!-- components/auth/LoginForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <div class="float-label-wrapper" :class="{ 'has-value': form.email }">
        <input 
          id="email"
          type="email" 
          v-model="form.email" 
          required
          class="input-field"
        />
        <label for="email" class="float-label">Email</label>
      </div>
    </div>
    
    <PasswordField 
      v-model="form.password" 
      label="Contraseña" 
    />
    
    <div class="account-options">
      <RememberMe v-model="remember" />
      <a href="#" class="forgot-link">¿Olvidaste la contraseña?</a>
    </div>
    
    <div v-if="error" class="error-message">
      {{ error }}
    </div>
    
    <AuthButton 
      type="submit" 
      :loading="loading" 
      loadingText="Iniciando sesión..." 
      defaultText="Iniciar sesión"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';
import PasswordField from '~/components/auth/PasswordField.vue';
import RememberMe from '~/components/auth/RememberMe.vue';
import AuthButton from '~/components/auth/AuthButton.vue';

// Autenticación
const { login, loading, error } = useAuth();

// Estado del formulario
const form = ref({
  email: '',
  password: ''
});
const remember = ref(false);

// Emite evento cuando se intenta hacer login
const emit = defineEmits<{
  (e: 'login-attempt', form: { email: string, password: string }): void
  (e: 'login-success'): void
  (e: 'login-error', error: unknown): void
}>();

// Manejo del formulario
const handleSubmit = async () => {
  emit('login-attempt', form.value);
  
  try {
    await login({
      email: form.value.email,
      password: form.value.password
    });
    emit('login-success');
  } catch (e) {
    emit('login-error', e);
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
  width: 100%;
}

.float-label-wrapper {
  position: relative;
  width: 100%;
}

.input-field {
  width: 100%;
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 5px;
  background-color: #243447;
  border: 1px solid #3A4A5C;
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 16px;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.input-field:focus {
  outline: none;
  border-color: #4D8CD9;
}

.float-label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #8A97A8;
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 16px;
}

.input-field:focus ~ .float-label,
.has-value .float-label {
  top: 25%;
  font-size: 12px;
  color: #4D8CD9;
}

.account-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}

.forgot-link {
  color: #4D8CD9;
  text-decoration: none;
  font-size: 14px;
}

.forgot-link:hover {
  text-decoration: underline;
}

.error-message {
  color: #FF4D4D;
  margin-bottom: 1rem;
  font-size: 14px;
}
</style>