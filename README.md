
# TAKEMED APP

TakeMed es una aplicación móvil simple desarrollada en React Native que ofrece consejos de salud y simula la conexión con un dispositivo BLE. La aplicación utiliza Expo CLI para facilitar el desarrollo y despliegue. El diseño es intuitivo, con una estética moderna y animaciones para mejorar la experiencia del usuario.

### Estructura del Proyecto (Archivos y carpetas clave)

**assets/**: Contiene recursos estáticos necesarios para la aplicación, como:

* **fonts/**: Fuentes personalizadas para estilos tipográficos.
* **images/**: Imágenes utilizadas en el diseño de la app.

**components/**: Almacena los componentes reutilizables de la aplicación que encapsulan funcionalidades específicas para evitar redundancia en el código.

**extras/**: Incluye archivos adicionales necesarias para la lógica del proyecto (en caso contiene el archivo JSON con la información de las recomendaciones o consejos de salud y simular la extracción de datos).

**interfaces/**: Define las interfaces TypeScript utilizadas para garantizar la tipificación fuerte en el proyecto.

**layouts/**: Organiza los diseños y estructuras generales de las pantallas.

**App.tsx:** Punto de entrada principal de la aplicación.
**GlobalStylesApp.tsx:** Define estilos globales aplicados en toda la app.
**index.ts:** Archivo principal que conecta la app con el entorno de desarrollo de React Native.

Para mantener un código modular y ordenado, utilizo una convención de nombres específica en los archivos dentro de components, que ayuda a identificar rápidamente el propósito de cada archivo y facilita la mantenibilidad:
* **index_**: Contiene el componente principal que retorna el JSX. Es el archivo donde está el **return** que define la estructura visual y la composición de ese componente.
* **styles_**: Define los estilos del componente mediante **StyleSheet.create()**. Centraliza toda la definición visual, permitiendo separar la lógica y el render del estilo.
* **func_**: Contiene la lógica relacionada con ese componente. Aquí se colocan funciones auxiliares, manejo de estados, cálculos o cualquier lógica que no sea directamente la UI o el estilo.

Cada carpeta principal dentro del proyecto está organizada para que los elementos correspondientes a cada layout o pestaña de la aplicación estén claramente diferenciados. Esto sigue un enfoque modular, donde cada funcionalidad de la app (Inicio, Menú, Información) tiene sus propios submódulos o componentes distribuidos en las carpetas principales.

## ENTORNO DE DESARROLLO

### Requisitos Previos
* Node.js y npm instalados. [Descargar Node.js](https://nodejs.org)
* Expo CLI instalado (opcional, en caso de no usar `npx`):
  ```bash
  npm install -g expo-cli

### Pasos para ejecución
* Clonar el repositorio
    ```bash
    git clone https://github.com/victsilva37/takemed-app

* Dirigirse al directorio **react-native-project** donde encuentra el código base del proyecto
    ```bash
    cd react-native-project

* Instalar dependencias
    ```bash
    npm install

* Ejecutar Expo y escanear el código QR desde la aplicación [Expo Go](https://expo.dev/client)
    ```bash
    npx expo start

* Si tienes problemas con la conexión o el escaneo del QR, intenta usar el modo túnel (requiere que el dispositivo móvil y la computadora estén en la misma red):. 
    ```bash
    npx expo start --tunnel

* Espera a que Metro Bundler esté listo y el túnel conectado, luego escanea el código QR para probar la app en tu dispositivo.


## PROCESO DE EXPORTACIÓN

* Creación de un proyecto en la consola oficial de Expo, lo cual te permitirá gestionar tus aplicaciones, realizar builds y distribuirlas.

* Inicialización de proyecto
    ```bash
    npm install -g eas-cli
    eas init --id <id>

* Luego se construye la aplicación para Android directamente en formato APK
    ```bash
    eas build --platform android

*  Durante el proceso se piden algunos datos para configurar la build (keystore, certificados, etc.). Expo es capaz de gestionarlos automáticamente.


## APK

Puedes descargar la apk mediante este enlace

* ![Descargar APK](https://drive.google.com/file/d/1PyrhDM7ayAQjk72dczBTuSOtWn8s_iao/view?usp=sharing)

Además, puedes ver el funcionamiento de esta app en el siguiente vídeo.

* [Link del vídeo](https://drive.google.com/file/d/1Q3pq6rVmwB4ia9H0cwCv3oSqtEcepgr4/view?usp=sharing)






