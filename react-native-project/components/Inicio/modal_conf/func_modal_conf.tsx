import { useState } from "react";

export function useModalSuccess() {

  /*----------------
      VARIABLES
  -----------------*/
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  //CARGAR MODAL

    const cargarModal = () => {
      setIsLoading(true); // Mostrar la rueda de carga
      setTimeout(() => {
        setIsLoading(false); // Ocultar la rueda de carga
        setIsModalVisible(true); // Mostrar el modal
      }, 2000); // Esperar 2 segundos
    };


  //MODAL DE CONFIRMACIÓN

    const closeModal = () => {
      setIsModalVisible(false); // Cerrar el modal
    };


  /*----------------
  RETORNAR VARIABLES
  -----------------*/
    return {
      isModalVisible,
      isLoading,
      cargarModal,
      closeModal,
    };
}

