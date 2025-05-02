  <!-- pages/register.vue -->
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
            <img src="assets\images\OnlyLogo_Tp.png" alt="Logo Humboldt" class="title-logo" />
          </div>
          <p class="app-subtitle">Crea tu cuenta</p>
        </div>
        
        <div class="card-content">
          <div class="card-left">
            <img src="~/assets/images/login-security.png" alt="RedCue Logo" class="login-image" />
          </div>
          
          <div class="card-right">
            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="fullName">Nombre completo</label>
                <input 
                  id="fullName"
                  type="text" 
                  v-model="form.fullName" 
                  placeholder="Tu nombre completo" 
                  required
                  class="input-field"
                />
              </div>
              
              <div class="form-group">
                <label for="username">Nombre de usuario</label>
                <input 
                  id="username"
                  type="text" 
                  v-model="form.username" 
                  placeholder="Tu nombre de usuario" 
                  required
                  class="input-field"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Correo electrónico</label>
                <input 
                  id="email"
                  type="email" 
                  v-model="form.email" 
                  placeholder="tu@email.com" 
                  required
                  class="input-field"
                />
              </div>
              
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input 
                  id="password"
                  :type="showPassword ? 'text' : 'password'" 
                  v-model="form.password" 
                  placeholder="Tu contraseña" 
                  required
                  class="input-field"
                />
              </div>
              
              <div v-if="error" class="error-message">
                {{ error }}
              </div>
              
              <button type="submit" class="login-button" :disabled="loading">
                <span v-if="loading">Registrando...</span>
                <span v-else>Crear cuenta</span>
              </button>
            </form>
          </div>
        </div>

        <div class="register-prompt">
          <p>¿Ya tienes una cuenta? <NuxtLink to="/login" class="register-link">Iniciar sesión</NuxtLink></p>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuth } from '~/composables/useAuth';

  // Autenticación
  const { register, loading, error } = useAuth();

  // Estado del formulario
  const form = ref({
    fullName: '',
    username: '',
    email: '',
    password: ''
  });
  const showPassword = ref(false);

  // Manejo del formulario
  const handleSubmit = async () => {
    await register({
      fullName: form.value.fullName,
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    });
  };
  </script>

  <style>
  @import '~/assets/css/login.css';

  /* Añadimos estilos específicos para los campos de entrada */
  .input-field {
    width: 100%;
    padding: 15px;
    background-color: #243447; /* Fondo de campos: azul grisáceo medio */
    border: 1px solid #3A4A5C; /* Bordes: gris azulado medio */
    border-radius: 10px;
    color: #FFFFFF; /* Texto principal: blanco */
    font-size: 16px;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  .input-field:focus {
    outline: none;
    border-color: #4D8CD9; /* Enlaces y elementos interactivos: azul claro */
  }

  input[type="email"] {
    width: 100%;
    padding: 15px;
    background-color: #243447; /* Fondo de campos: azul grisáceo medio */
    border: 1px solid #3A4A5C; /* Bordes: gris azulado medio */
    border-radius: 10px;
    color: #FFFFFF; /* Texto principal: blanco */
    font-size: 16px;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }

  input[type="email"]:focus {
    outline: none;
    border-color: #4D8CD9; /* Enlaces y elementos interactivos: azul claro */
  }

  .error-message {
    color: #ff4d4d;
    margin-bottom: 15px;
    text-align: center;
    font-size: 14px;
  }
  </style>