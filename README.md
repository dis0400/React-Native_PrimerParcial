
# Primer Parcial Certificación React Native: Calculadora con modo claro y modo oscuro
Se presenta una aplicación de calculadora en React Native con Expo CLI.

A continuación instrucciones y requisitos para la correcta instalación.
  
## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos antes de comenzar:

- Node.js (https://nodejs.org/)
- npm o yarn (npm viene incluido con Node.js)
- Expo CLI (se puede instalar con `npm install -g expo-cli` o `yarn global add expo-cli`)
## Instalación
Sigue estos pasos para instalar y ejecutar la aplicación:

1. Clona el repositorio:

    ```sh
    git clone https://github.com/dis0400/Calculadora_PrimerParcial_React-Native.git
    cd calculadora
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

    o si usas yarn:

    ```sh
    yarn install
    ```

## Ejecución

Para iniciar la aplicación, usa uno de los siguientes comandos:

```sh
npm start
o
yarn start
```
Esto abrirá el servidor de desarrollo de Expo. Generara el código QR que podras escanear con la aplicación Expo Go en tu dispositivo móvil para ver la aplicación en funcionamiento. (puedes instalar Expo Go desde la App Store o Google Play)


## Características del Proyecto

- **Operaciones básicas**: suma, resta, multiplicación y división.
- **Cambio de modo**: Alterna entre modo claro y oscuro con un switch.

## Demostración 
Aquí podemos ver la aplicación en funcionamiento:
https://youtube.com/shorts/bbsWxP335fs?si=zQRAH88px2eDlhqK

## Estructura del proyecto
```sh
calculadora/
├── assets/
│   └── (archivos de recursos, como imágenes, fuentes, etc.)
├── node_modules/
│   └── (dependencias del proyecto instaladas por npm o yarn)
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   └── CustomSwitch.js
│   ├── config/
│   │   └── theme/
│   │       └── app-themes.js
│   └── screens/
│       └── CalculatorScreen.js
├── .gitignore
├── App.js
├── app.json
├── babel.config.js
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
```
