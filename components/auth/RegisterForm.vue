<!-- <template>
  <div class="register-form">
    <h2 class="text-2xl font-bold mb-6">Crear cuenta</h2>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="form-group">
        <div class="float-label-wrapper" :class="{ 'has-value': form.fullName }">
          <input 
            id="fullName"
            v-model="form.fullName"
            type="text"
            class="form-input"
            required
          />
          <label for="fullName" class="float-label">Nombre completo</label>
        </div>
      </div>
      
      <div class="form-group">
        <div class="float-label-wrapper" :class="{ 'has-value': form.username }">
          <input 
            id="username"
            v-model="form.username"
            type="text"
            class="form-input"
            required
          />
          <label for="username" class="float-label">Nombre de usuario</label>
        </div>
      </div>
      
      <div class="form-group">
        <div class="float-label-wrapper" :class="{ 'has-value': form.email }">
          <input 
            id="email"
            v-model="form.email"
            type="email"
            class="form-input"
            required
          />
          <label for="email" class="float-label">Correo electrónico</label>
        </div>
      </div>
      
      <div class="form-group">
        <div class="float-label-wrapper" :class="{ 'has-value': form.password }">
          <div class="password-input-wrapper">
            <input 
              id="password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              required
            />
            <label for="password" class="float-label">Contraseña</label>
            <button 
              type="button" 
              class="toggle-password" 
              @click="showPassword = !showPassword"
              tabindex="-1"
              aria-label="Toggle password visibility"
            >
              <img 
                :src="showPassword ? eyeHideIcon : eyeViewIcon" 
                :alt="showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'"
                class="eye-icon"
              />
            </button>
          </div>
        </div>
      </div>
      
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      
      <button 
        type="submit" 
        class="btn-primary w-full"
        :disabled="loading"
      >
        {{ loading ? 'Registrando...' : 'Registrarse' }}
      </button>
      
      <div class="text-center mt-4">
        <p>¿Ya tienes cuenta? <NuxtLink to="/login" class="text-blue-600">Inicia sesión</NuxtLink></p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';

// Importa los iconos de ojo (ajusta las rutas según tu estructura de proyecto)
import eyeViewIcon from '@/assets/images/Eye_view.png';
import eyeHideIcon from '@/assets/images/Eye_hide.png';

const { register, loading, error } = useAuth();

const form = ref({
  fullName: '',
  username: '',
  email: '',
  password: ''
});

// Estado para mostrar/ocultar la contraseña
const showPassword = ref(false);

const handleSubmit = async () => {
  await register({
    fullName: form.value.fullName,
    username: form.value.username,
    email: form.value.email,
    password: form.value.password
  });
};
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.form-group {
  margin-bottom: 1.5rem;
}

.float-label-wrapper {
  position: relative;
  width: 100%;
}

.password-input-wrapper {
  position: relative;
  display: flex;
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 5px;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  color: #1f2937;
  font-size: 16px;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #4D8CD9;
  box-shadow: 0 0 0 3px rgba(77, 140, 217, 0.1);
}

.float-label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
  transition: all 0.2s ease;
  font-size: 16px;
}

.form-input:focus ~ .float-label,
.has-value .float-label {
  top: 25%;
  font-size: 12px;
  color: #4D8CD9;
}

.toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.eye-icon {
  width: 20px;
  height: 20px;
}

.error-message {
  color: #EF4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.btn-primary {
  background-color: #4D8CD9;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #3b7bc7;
}

.btn-primary:disabled {
  background-color: #9cb3d8;
  cursor: not-allowed;
}
</style> -->