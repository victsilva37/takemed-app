import React from "react";
import { View, Text, ScrollView, Animated } from "react-native";
import { styles_informacion } from "./styles_informacion";
import { useInformacion } from "./func_informacion";
import { GlobalStyles } from "@/GlobalStylesApp";

export default function Informacion() {
  // Importación de variables desde el hook personalizado
  const { recomendaciones, animationValues } = useInformacion();

  return (
    <View style={GlobalStyles.globalBackground}>
        <View style={styles_informacion.container}>
        {/* Título */}
        <Text style={styles_informacion.title}>Consejos de Salud</Text>

        {/* Lista de consejos */}
        <ScrollView>
          {recomendaciones.map((recom, index) => (

            //TARJETAS ANIMADAS

              <Animated.View
                key={recom.id}
                style={[
                  styles_informacion.cardConsejos,
                  { transform: [{ translateX: animationValues[index] }] }, // Anima la posición en X
                ]}
              >
                {/* Título del consejo */}
                <Text style={styles_informacion.txtNombreConsejo}>{recom.titulo}</Text>
                {/* Descripción del consejo */}
                <Text style={styles_informacion.txtDescription}>{recom.descripcion}</Text>
              </Animated.View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}
