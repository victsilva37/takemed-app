import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import { useModalSuccess } from "./modal_conf/func_modal_conf";
import ModalSuccess from "./modal_conf/index_modal_conf";
import { styles_Inicio } from "./styles_inicio";
import { GlobalStyles } from "@/GlobalStylesApp";

export default function Inicio() {


  const { isModalVisible, isLoading, cargarModal, closeModal } = useModalSuccess();
  var nombre_usuario = "Usuario 1"
  var num_pasos = 5000

  return (
    
    <View style={GlobalStyles.globalBackground}>
        <View style={styles_Inicio.mainContainer}>

          {/*Text: Label Nombre del usuario*/}
          <Text style={styles_Inicio.txtLabelUsuario}>Nombre de usuario:</Text>

          {/*Text: Nombre del usuario*/}
          <Text style={styles_Inicio.txtNombreUsuario}>{nombre_usuario}</Text>

          {/*Text: Pasos*/}
          <Text style={styles_Inicio.txtPasos}>{num_pasos} pasos</Text>

          {/*TouchableOpacity: Sincronizar dispositivo*/}
          <TouchableOpacity style={styles_Inicio.touchSinc} onPress={cargarModal}>
            {/*Text: Sincronizar dispositivo*/}
            <Text style={styles_Inicio.txtSinc}>Sincronizar dispositivo</Text>
          </TouchableOpacity>

          {/* Component: MODAL-SUCCESS */}
          <ModalSuccess
            isModalVisible={isModalVisible}
            isLoading={isLoading}
            closeModal={closeModal}
          />
        </View>
    </View>
    
  );
}