import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import recomendacionesData from "../../extras/Informacion/data_recom.json"
import { Recomendacion } from "@/interfaces/Informacion/int-Recomendacion";

export function useInformacion() {

  /*----------------
      VARIABLES
  -----------------*/
  const recomendaciones: Recomendacion[] = recomendacionesData;
  const animationValues = useRef(recomendaciones.map(() => new Animated.Value(-100))).current;


  //TARJETAS ANIMADAS

    useEffect(() => {
      const animations = recomendaciones.map((_, index) =>
        Animated.timing(animationValues[index], {
          toValue: 0,
          duration: 500,
          delay: index * 100,
          useNativeDriver: true,
        })
      );

      Animated.stagger(300, animations).start();
    }, [animationValues, recomendaciones]);

  /*----------------
  RETORNAR VARIABLES
  -----------------*/
  return { 
    recomendaciones, 
    animationValues 
  };
}
