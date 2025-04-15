# Proyecto de Pruebas con Playwright

Este proyecto utiliza Playwright para pruebas automatizadas, incluyendo pruebas de API y pruebas end-to-end.

## Requisitos previos

Antes de ejecutar las pruebas, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Playwright](https://playwright.dev/)

## Instalación

Clona este repositorio y ejecuta el siguiente comando para instalar las dependencias:

```sh
npm install
```

## Ejecución de Pruebas

### Ejecutar todas las pruebas

Para ejecutar todas las pruebas del proyecto, usa:

```sh
npx playwright test
```

### Ejecutar solo las pruebas de API

Las pruebas de API están ubicadas en `tests/pruebaApi.spec.js`. Para ejecutarlas específicamente, usa:

```sh
npx playwright test tests/pruebaApi.spec.js
```

## Configuración

El archivo de configuración de Playwright se encuentra en `playwright.config.js`. Puedes modificarlo para ajustar la configuración de ejecución según tus necesidades.

## Reportes de Pruebas

Después de ejecutar las pruebas, puedes generar un informe de resultados con:

```sh
npx playwright show-report
```

Esto abrirá un reporte interactivo en tu navegador.

## Comandos Útiles

Dentro del directorio del proyecto, puedes ejecutar los siguientes comandos:

```sh
npx playwright test
```
Ejecuta todas las pruebas end-to-end.

```sh
npx playwright test --ui
```
Inicia el modo interactivo de Playwright.

```sh
npx playwright test --project=chromium
```
Ejecuta las pruebas solo en Chrome de escritorio.

```sh
npx playwright test tests/pruebaApi.spec.js
```
Ejecuta las pruebas en un archivo específico.

```sh
npx playwright test --debug
```
Ejecuta las pruebas en modo depuración.

```sh
npx playwright codegen
```
Genera pruebas automáticamente con Codegen.

## Estructura del Proyecto

```
📂 proyecto
│-- 📂 tests                # Carpeta de pruebas
│   ├── pruebaApi.spec.js   # Pruebas de API
│-- 📄 playwright.config.js  # Configuración de Playwright
│-- 📄 package.json         # Configuración del proyecto y dependencias
│-- 📄 README.md            # Documentación del proyecto
```

## Contacto

Si tienes dudas o sugerencias, siéntete libre de contribuir o abrir un issue en el repositorio. 🚀

## Notas:
Puedes volver a instalar los navegadores que Playwright necesita con este comando:

```sh
npx playwright install
```


