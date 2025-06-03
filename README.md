
# TAKEMED APP

TakeMed es una aplicación móvil simple desarrollada en React Native que ofrece consejos de salud y se conecta con un dispositivo BLE. La aplicación utiliza Expo CLI para facilitar el desarrollo y despliegue. El diseño es intuitivo, con una estética moderna y animaciones para mejorar la experiencia del usuario.

## Estructura del Proyecto (Archivos y carpetas clave)

assets/: Contiene recursos estáticos necesarios para la aplicación, como:

* fonts/: Fuentes personalizadas para estilos tipográficos.
* images/: Imágenes utilizadas en el diseño de la app.

components/: Almacena los componentes reutilizables de la aplicación que encapsulan funcionalidades específicas para evitar redundancia en el código.

extras/: Incluye archivos adicionales necesarias para la lógica del proyecto (en caso contiene el archivo JSON con las recomendaciones o consejos de salud).

interfaces/: Define las interfaces TypeScript utilizadas para garantizar la tipificación fuerte en el proyecto.

layouts/: Organiza los diseños y estructuras generales de las pantallas, proporcionando consistencia visual y lógica en la app.

Archivos raíz:

* App.tsx: Punto de entrada principal de la aplicación.
* GlobalStylesApp.tsx: Define estilos globales aplicados en toda la app.
* index.ts: Archivo principal que conecta la app con el entorno de desarrollo de React Native.

Cada carpeta principal dentro del proyecto está organizada para que los elementos correspondientes a cada layout o pestaña de la aplicación estén claramente diferenciados. Esto sigue un enfoque modular, donde cada funcionalidad de la app (Inicio, Menú, Información) tiene sus propios submódulos o componentes distribuidos en las carpetas principales.

## INSTRUCCIONES DE EJECUCIÓN

## Requisitos Previos
* Node.js y npm instalados. [Descargar Node.js](https://nodejs.org)
* Expo CLI instalado (opcional, en caso de no usar `npx`). Instálalo ejecutando:
  ```bash
  npm install -g expo-cli

Clonar el repositorio
```git clone https://github.com/victsilva37/takemed-app```

Dirigirse al directorio **react-native-project** donde encuentra el código base del proyecto
```cd react-native-project```

Instalar dependencias
* ```npm install```

Ejecutar Expo y escanear el código QR desde la aplicación [Expo Go](https://expo.dev/client)
* ```npx expo start```

En caso de que el comando anterior genere error al escanear el código QR, puede ejecutar lo siguiente. Siempre y cuando esté conectado a la misma red Wifi para que detecte la aplicación de Expo Go. 
* ```npx expo start --tunnel```

Suele no conectarse la primera vez, por lo que debe ejecutarlo más una vez hasta que aparezca esta respuesta:

* Starting Metro Bundler
  Tunnel connected.
  Tunnel ready.


