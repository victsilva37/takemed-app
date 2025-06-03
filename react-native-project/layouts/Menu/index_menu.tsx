import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Asegúrate de instalar react-native-vector-icons
import { Image } from 'react-native'; // Importar el componente de imagen
import Inicio from '@/components/Inicio/index_inicio';// Asegúrate de crear el componente Inicio
import Informacion from '@/components/Informacion/index_informacion'; // Asegúrate de crear el componente Informacion
import { stylesMenu } from './styles_menu';

// Crear Tab Navigator
const Tab = createBottomTabNavigator();

export default function Menu() {
  return (

      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#32C1E9' },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#D5D2F0',
        }}
      >

        {/*Tab Screen: INICIO*/}

          <Tab.Screen
            name="Inicio"
            component={Inicio}
            options={{

              //HEADER

                headerTitle: () => (
                  //Image: Logo de la empresa
                  <Image
                    source={require('../../assets/Menu/images/splash-icon.png')} // Ruta al logo
                    style={stylesMenu.imgLogo} // Ajusta tamaño del logo
                  />
                ),
                headerStyle: {
                  backgroundColor: '#32C1E9', // Color de fondo del header
                },


              //NAVIGATION

                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ), 
            }}
          />


        {/*Tab Screen: INFORMACIÓN*/}

          <Tab.Screen
            name="Información"
            component={Informacion}
            options={{

              //HEADER

                headerTitle: () => (
                  <Image
                    source={require('../../assets/images/splash-icon.png')} // Ruta al logo
                    style={{ width: 120, height: 40, resizeMode: 'contain' }} // Ajusta tamaño del logo
                  />
                ),


              //NAVIGATION

                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="information-circle" size={size} color={color} />
                ),
                
                headerStyle: {
                  backgroundColor: '#32C1E9', // Color de fondo del header
                },
            }}
          />
      </Tab.Navigator>
  );
}
