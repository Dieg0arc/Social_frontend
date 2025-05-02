<!-- components/auth/RememberMe.vue -->
<template>
    <label class="remember-label">
      <input 
        type="checkbox" 
        :checked="modelValue"
        @change="e => $emit('update:modelValue', (e.target as HTMLInputElement).checked)" 
      />
      <span>Recordar este dispositivo</span>
    </label>
  </template>
  
  <script setup lang="ts">
  defineProps({
    modelValue: {
      type: Boolean,
      required: true
    }
  });
  
  defineEmits(['update:modelValue']);
  </script>