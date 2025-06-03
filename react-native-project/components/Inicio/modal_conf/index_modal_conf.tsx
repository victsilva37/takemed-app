import React from "react";
import {View,Text,Modal,ActivityIndicator,TouchableOpacity} from "react-native";
import { styles_ModalSuc } from "./styles_modal_conf";

interface ModalSuccessProps {
  isModalVisible: boolean;
  isLoading: boolean;
  closeModal: () => void;
}

export default function ModalSuccess({isModalVisible,isLoading,closeModal}: ModalSuccessProps) {

  return (

    <View>

      {/*CARGAR MODAL*/}

        {isLoading && (
          <ActivityIndicator size="large" color="#0056D2"/>
        )}


      {/*MODAL DE CONFIRMACIÓN*/}

        <Modal visible={isModalVisible} transparent animationType="slide">

          {/* View: Contenedor principal */}
          <View style={styles_ModalSuc.mainContainer}>

  
              {/*Text: Sincronización exitosa */}
              <Text style={styles_ModalSuc.txtSincEx}>Sincronización exitosa con el dispositivo BLE</Text>

              {/* TouchableOpacity: Cerrar modal */}
              <TouchableOpacity style={styles_ModalSuc.touchCerrar} onPress={closeModal}>
                <Text style={styles_ModalSuc.txtCerrar}>Cerrar</Text>
              </TouchableOpacity>

              

          </View>
        </Modal>

    </View>
  );
}


