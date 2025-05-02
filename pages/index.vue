<template>
    <div class="home-page">
      <div class="container mx-auto px-4 py-12">
        <h1 class="text-3xl font-bold mb-6">Red Social del Conocimiento Humboldt</h1>
        
        <div v-if="isAuthenticated">
          <p class="mb-4">Bienvenido, {{ user?.fullName || 'Usuario' }}!</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="feature-card">
              <h2 class="text-xl font-semibold mb-2">Explorar Recursos</h2>
              <p>Descubre tutoriales, videos y materiales compartidos por la comunidad universitaria.</p>
              <button class="btn-primary mt-4">Explorar</button>
            </div>
            
            <div class="feature-card">
              <h2 class="text-xl font-semibold mb-2">Compartir Conocimiento</h2>
              <p>Comparte tus propios recursos con otros estudiantes y profesores.</p>
              <button class="btn-primary mt-4">Publicar</button>
            </div>
            
            <div class="feature-card">
              <h2 class="text-xl font-semibold mb-2">Eventos Académicos</h2>
              <p>Descubre y participa en eventos organizados por la comunidad.</p>
              <button class="btn-primary mt-4">Ver Eventos</button>
            </div>
          </div>
        </div>
        
        <div v-else class="text-center">
          <p class="mb-6">Comparte y descubre conocimiento en la comunidad Alexander Von Humboldt</p>
          <div class="flex justify-center gap-4">
            <NuxtLink to="/login" class="btn-primary">Iniciar Sesión</NuxtLink>
            <NuxtLink to="/register" class="btn-secondary">Registrarse</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuth } from '~/composables/useAuth';
  
  const { user, isAuthenticated } = useAuth();
  </script>
  
  <style scoped>
  .home-page {
    min-height: 80vh;
  }
  
  .feature-card {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .btn-secondary {
    background-color: white;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .btn-secondary:hover {
    background-color: #f3f4f6;
  }
  </style>