<!-- components/auth/PasswordField.vue -->
<template>
  <div class="form-group password-field">
    <div class="float-label-wrapper" :class="{ 'has-value': modelValue }">
      <div class="password-input-wrapper">
        <input 
          :id="id"
          :type="showPassword ? 'text' : 'password'" 
          :value="modelValue"
          @input="handleInput"
          required
          class="input-field"
        />
        <label :for="id" class="float-label">{{ label }}</label>
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
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Import the eye icons
// You'll need to adjust the paths to match your project structure
import eyeViewIcon from '@/assets/images/Eye_view.png';
import eyeHideIcon from '@/assets/images/Eye_hide.png';

// Propiedades
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Contraseña'
  },
  placeholder: {
    type: String,
    default: 'Ingresa tu contraseña'
  },
  id: {
    type: String,
    default: 'password'
  }
});

const emit = defineEmits(['update:modelValue']);

// Manejador del input con event.currentTarget para mayor seguridad
const handleInput = (event: Event) => {
  const input = event.currentTarget as HTMLInputElement;
  emit('update:modelValue', input.value);
};

// Estado interno
const showPassword = ref(false);
</script>

<style scoped>
.password-field {
  width: 100%;
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
</style>