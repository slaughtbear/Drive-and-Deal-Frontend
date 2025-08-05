# Drive and Deal Frontend ⚛️

Interfaz web del sistema de renta y reparación de vehículos, desarrollada con **React**, **ViteJS** y **TailwindCSS**, conectada al backend en **FastAPI**.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react\&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge\&logo=tailwindcss\&logoColor=white)

---

## 🧩 Descripción

Este frontend permite a los usuarios interactuar visualmente con el sistema desarrollado para el caso de estudio **Renta de Autos**, incluyendo:

* Visualización y gestión de clientes, autos, rentas y reparaciones
* Autenticación y control de acceso por roles (Empleado, Encargado, Dueño)

> ⚠️ Requiere conexión con el backend desarrollado en FastAPI. Consulta el [repositorio del backend](https://github.com/slaughtbear/Drive-and-Deal-Backend) para más información.

---

## ⚙️ Tecnologías Usadas

* **React** – Librería para interfaces de usuario
* **ViteJS** – Herramienta de desarrollo rápida para React
* **TailwindCSS** – Framework de estilos CSS utilitario
* **Axios** – Cliente HTTP para consumir la API
* **React Router** – Manejo de rutas

---

## 🚀 Instalación y ejecución

Sigue los siguientes pasos para clonar y correr la aplicación localmente:

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/drive-and-deal-frontend.git
cd drive-and-deal-frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
VITE_API_URL=http://localhost:8000
```

Asegúrate de que el backend esté corriendo en esa URL o ajusta la variable según sea necesario.

### 4. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:
[http://localhost:5173](http://localhost:5173)

---

## 📁 Estructura del Proyecto

```
drive-and-deal-frontend/
├── public/
├── src/
│   ├── api/    
│   ├── components/
│   ├── pages/
│   └── App.jsx
├── .env
├── tailwind.config.js
├── index.html
└── vite.config.js
```

---

## 🔐 Funcionalidades por rol

| Rol                    | Permisos                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------ |
| **Empleado**           | Gestionar clientes, registrar rentas, consultar autos disponibles                    |
| **Encargado de autos** | Gestionar autos, registrar reparaciones y devoluciones, consultar autos más rentados |
| **Dueño**              | Consultar estadísticas de reparaciones (por fecha y monto)                           |
---

## 👨‍💻 Autor

Iván Aguirre – [@slaughtbear](https://github.com/slaughtbear)

---
