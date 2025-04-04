# dashboard-financiero - Documentación

## Introducción
Este proyecto es una aplicación Angular desarrollada con TypeScript y Angular CLI. Su propósito es [describir el propósito de la aplicación].

## Requisitos previos
Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- [Angular CLI](https://angular.io/cli) (última versión estable)
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/)

## Instalación
Sigue estos pasos para instalar y ejecutar el proyecto:

```sh
# Clonar el repositorio
git clone https://github.com/NTTData-IDP/dashboard-financiero.git
cd dashboard-financiero

# Instalar dependencias
npm install
```

## Ejecución
Para ejecutar el servidor de desarrollo, usa el siguiente comando:

```sh
ng serve
```

Luego, abre tu navegador y visita `http://localhost:4200/`.

## Estructura del Proyecto
```
dashboard-financiero/
│-- src/
│   │-- app/
│   │   │-- components/       # Componentes de la aplicación
│   │   │-- services/         # Servicios de la aplicación
│   │   └── app.module.ts     # Módulo principal de la aplicación
│   │-- assets/               # Archivos estáticos como imágenes y estilos
│   │-- environments/         # Configuración para distintos entornos
│   └── main.ts               # Punto de entrada de la aplicación
│-- angular.json              # Configuración de Angular
│-- package.json              # Dependencias del proyecto
└── README.md                 # Documentación del proyecto
```

## Generación de Componentes
Puedes generar nuevos componentes usando Angular CLI:

```sh
ng generate component nombre-del-componente
```

## Construcción
Para compilar la aplicación para producción, ejecuta:

```sh
ng build --configuration=production
```

Los archivos compilados estarán en la carpeta `dist/`.

## Pruebas
Ejecuta pruebas unitarias con:

```sh
ng test
```

Para pruebas de extremo a extremo (E2E):

```sh
ng e2e
```

## Despliegue
Para desplegar la aplicación en un servidor web o en GitHub Pages:

```sh
ng deploy
```

## Contribución
Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia
Este proyecto está licenciado bajo la licencia [MIT](LICENSE).

## Contacto
Para cualquier consulta, puedes contactar al equipo de desarrollo en [correo@ejemplo.com](mailto:correo@ejemplo.com).
