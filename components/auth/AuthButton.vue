<!-- components/auth/AuthButton.vue -->
<template>
  <button 
    :type="type as 'button' | 'submit' | 'reset'" 
    class="auth-button" 
    :disabled="loading || disabled"
  >
    <span v-if="loading">{{ loadingText }}</span>
    <span v-else>{{ defaultText }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: 'Cargando...'
  },
  defaultText: {
    type: String,
    required: true
  }
});
</script>
<style>
@import '~/assets/css/auth.css';
</style>