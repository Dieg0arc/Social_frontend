# 🌐 Red Social del Conocimiento Humboldt - Frontend

Componente frontend de la plataforma para compartir y descubrir recursos académicos creados por la comunidad universitaria Alexander Von Humboldt.

## 📋 Descripción

Este repositorio contiene el código fuente del frontend de la **Red Social del Conocimiento Humboldt**, una plataforma que centraliza y facilita el intercambio de conocimiento académico entre estudiantes y docentes. El frontend proporciona interfaces intuitivas para compartir, descubrir y participar en la comunidad académica.

---

## 🛠️ Tecnologías Utilizadas

- **Framework:** Vue.js con NUXT 3
- **Lenguaje:** TypeScript
- **Gestión de Estado:** Pinia
- **Estilos:** Tailwind CSS
- **Componentes UI:** PrimeVue
- **Testing:** Vitest y Cypress
- **Metodología:** Ágil (Scrum)

---

## 🏗️ Estructura del Proyecto

```
📦 red-social-conocimiento-frontend
 ┣ 📂 components
 ┃ ┣ 📂 auth
 ┃ ┣ 📂 content
 ┃ ┣ 📂 profile
 ┃ ┗ 📂 shared
 ┣ 📂 pages
 ┣ 📂 public
 ┣ 📂 store
 ┣ 📂 assets
 ┣ 📂 layouts
 ┣ 📂 composables
 ┣ 📂 tests
 ┣ 📜 nuxt.config.ts
 ┗ 📜 package.json
```

---

## 🚀 Funcionalidades Implementadas

- ✅ **Sistema de Autenticación:** Registro, inicio de sesión y recuperación de contraseñas
- ✅ **Perfiles de Usuario:** Visualización y edición de perfiles académicos
- ✅ **Explorador de Contenidos:** Interfaz para navegar recursos educativos con filtros
- ✅ **Editor de Recursos:** Herramientas para crear y editar contenidos académicos
- ✅ **Interacciones Sociales:** Comentarios, valoraciones y sistema de seguimiento
- ✅ **Calendario de Eventos:** Visualización e inscripción a eventos académicos
- ✅ **Panel de Notificaciones:** Centro de alertas para mantener al usuario informado

---

## 🔧 Instalación y Desarrollo

### Requisitos Previos
- Node.js 16+
- npm o yarn

### Configuración
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/red-social-conocimiento-frontend.git
cd red-social-conocimiento-frontend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

### Desarrollo Local
```bash
# Iniciar servidor de desarrollo
npm run dev
```

### Construcción para Producción
```bash
# Compilar para producción
npm run build

# Previsualizar la build
npm run preview
```

### Tests
```bash
# Ejecutar tests unitarios
npm run test

# Ejecutar tests e2e
npm run test:e2e
```

---

## 📊 Metodología de Trabajo

Seguimos la metodología **Scrum** con sprints de dos semanas:

- 📌 **Product Backlog:** Historias de usuario priorizadas en Jira
- 📌 **Dailies virtuales:** Actualizaciones diarias vía Slack
- 📌 **Code Reviews:** Revisión de código mediante Pull Requests

---

## 🔍 Buenas Prácticas

- 📌 **Convenciones de nomenclatura:** PascalCase para componentes, camelCase para variables
- 📌 **Commits semánticos:**
  - `feat:` Nuevas funcionalidades
  - `fix:` Corrección de errores
  - `docs:` Cambios en documentación
  - `style:` Cambios de formato
  - `refactor:` Refactorizaciones de código
  - `test:` Adición o modificación de tests
- 📌 **Ramas:**
  - `main` → Código en producción
  - `develop` → Código integrado para el próximo release
  - `feature/nombre-feature` → Desarrollo de nuevas funcionalidades

---

## 👥 Equipo de Desarrollo

- **Diego Alejandro Ramirez Castro**
- **Juan Jose Garay Cuellar**

---

## 📱 Capturas de Pantalla

*[Se añadirán capturas de pantalla conforme avance el desarrollo]*

---

## 🔗 Enlaces Relacionados

- [Repositorio Backend](https://github.com/tu-usuario/red-social-conocimiento-backend)
- [Documentación del Proyecto](enlace-a-la-documentacion)

---

## 📝 Licencia

Proyecto académico desarrollado para la Universidad Alexander Von Humboldt.
