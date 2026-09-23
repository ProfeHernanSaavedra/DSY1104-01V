# DSY1104-01V 🚀

Repositorio de apoyo para la asignatura **DSY1104 – Desarrollo Fullstack II**, sección **01V**, año **2026**.

Este repositorio contiene los ejemplos, ejercicios y proyectos desarrollados durante las clases. El objetivo es que los estudiantes puedan revisar el código trabajado en aula, practicar y continuar desarrollando los ejercicios fuera de clases.

---

## 👨‍🏫 Profesor

**Hernán Saavedra**

---

# 📚 Contenido del repositorio

El repositorio se irá actualizando durante el semestre a medida que avancemos en los contenidos de la asignatura.

Actualmente el material se encuentra organizado principalmente por semanas.

### 📁 DSY1104-01V

Contiene material y ejemplos iniciales desarrollados durante las primeras clases de la asignatura.

---

### 📁 Semana 3

Ejercicios correspondientes a los contenidos desarrollados durante la tercera semana de clases.

---

### 📁 Semana 4

Ejercicios y ejemplos correspondientes a la cuarta semana.

Durante estas primeras semanas hemos trabajado los fundamentos necesarios para avanzar posteriormente hacia el desarrollo de aplicaciones utilizando React.

---

# ⚛️ Semana React

En esta etapa comenzamos a trabajar con **React**.

El proyecto se encuentra en:

```text
Semana react/
└── mi-primer-react/
```

React nos permitirá construir aplicaciones web utilizando **componentes reutilizables**, dividiendo una aplicación en pequeñas partes que pueden desarrollarse y mantenerse de manera independiente.

## 📌 Conceptos iniciales de React

En nuestra primera aproximación a React revisamos conceptos como:

* ¿Qué es React?
* ¿Qué es Node.js?
* ¿Qué es npm?
* ¿Qué es Vite?
* Creación de un proyecto React.
* Estructura básica de un proyecto.
* Componentes.
* JSX.
* Importación y exportación de componentes.
* Eventos.
* Estado de un componente.
* Uso básico del Hook `useState`.

---

# 🛠️ Tecnologías utilizadas

Durante el curso utilizaremos principalmente:

* HTML5
* CSS3
* JavaScript
* Bootstrap
* React
* Vite
* Node.js
* npm
* Visual Studio Code
* Git
* GitHub

---

# ⚛️ Crear nuestro primer proyecto React

Para crear un nuevo proyecto utilizamos **Vite**.

Desde la terminal ejecutamos:

```bash
npm create vite@latest
```

Luego seleccionamos:

```text
Framework: React
Variant: JavaScript
```

Entramos a la carpeta del proyecto:

```bash
cd mi-primer-react
```

Instalamos las dependencias:

```bash
npm install
```

Finalmente iniciamos el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará una dirección local similar a:

```text
http://localhost:5173/
```

Abrimos esa dirección en nuestro navegador para visualizar la aplicación.

---

# 📂 Estructura básica de un proyecto React

Un proyecto creado con React y Vite tendrá una estructura similar a:

```text
mi-primer-react/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## Archivos importantes

### `main.jsx`

Es el punto de entrada de nuestra aplicación React.

Desde aquí se carga el componente principal de nuestra aplicación.

### `App.jsx`

Es el componente principal.

A partir de `App.jsx` podemos comenzar a incorporar nuestros propios componentes.

### `components/`

Podemos utilizar esta carpeta para organizar los componentes que iremos creando durante el curso.

Por ejemplo:

```text
src/
└── components/
    ├── Contador.jsx
    ├── Saludo.jsx
    └── Formulario.jsx
```

---

# 🧩 ¿Qué es un componente?

Un **componente** es una parte de nuestra aplicación que podemos crear y reutilizar.

Por ejemplo, una aplicación podría estar formada por:

```text
App
│
├── Header
├── Menu
├── Contador
├── Formulario
└── Footer
```

Cada una de estas partes puede ser un componente independiente.

Esto nos permite mantener nuestro código más organizado y reutilizar elementos cuando sea necesario.

---

# 🔢 Ejemplo básico con useState

Uno de los primeros ejemplos que podemos desarrollar en React es un contador:

```jsx
import { useState } from 'react'

function Contador() {

  const [contador, setContador] = useState(0)

  return (
    <div>
      <h2>Contador: {contador}</h2>

      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  )
}

export default Contador
```

Con este pequeño ejemplo podemos comenzar a comprender:

* Componentes.
* JSX.
* Variables de estado.
* `useState`.
* Eventos.
* Actualización automática de la interfaz.

---

# 🎯 Objetivo del repositorio

Este repositorio busca complementar el trabajo realizado durante las clases.

Los estudiantes podrán utilizarlo para:

* Revisar los ejemplos desarrollados en clases.
* Descargar el código realizado por el profesor.
* Comparar sus soluciones.
* Practicar los contenidos.
* Repasar conceptos.
* Continuar ejercicios iniciados durante la clase.
* Prepararse para futuras actividades y evaluaciones.

---

# 💻 Clonar el repositorio

Para descargar todo el repositorio:

```bash
git clone https://github.com/ProfeHernanSaavedra/DSY1104-01V.git
```

Luego ingresar a la carpeta:

```bash
cd DSY1104-01V
```

---

# 🔄 Mantener actualizado el repositorio

Como durante el semestre iremos agregando nuevos ejemplos y ejercicios, es recomendable actualizar periódicamente la copia local.

Para obtener los últimos cambios:

```bash
git pull
```

De esta forma podrán acceder al material que se vaya incorporando después de cada clase.

---

# 📌 Importante

Este repositorio se encuentra **en constante actualización**.

A medida que avancemos durante el semestre se incorporarán nuevos:

* ejemplos,
* ejercicios,
* componentes,
* proyectos,
* actividades,
* recursos de apoyo.

Por lo tanto, el contenido disponible irá creciendo junto con el avance de la asignatura.

---

## 👨‍💻 DSY1104 – Desarrollo Fullstack II

**Sección:** 01V
**Año:** 2026
**Profesor:** Hernán Saavedra
