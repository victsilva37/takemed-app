import { StyleSheet } from "react-native";

export const styles_ModalSuc = StyleSheet.create({

    //CARGAR MODAL

        //sin contenido


    //MODAL DE CONFIRMACIÓN

        /* View: Contenedor principal */
        mainContainer: {
            backgroundColor: '#528FE1',
            margin: 'auto',
            padding: 20,
        },

            /*Text: Sincronización exitosa */
            txtSincEx:{
                marginTop: 20,
                color: 'white'
            },

             /* TouchableOpacity: Cerrar modal */
            touchCerrar: {
                backgroundColor: 'red',
                width: 90,
                alignSelf: 'center',
                marginTop: 20,
                padding: 5
            },

                /* Text: Cerrar modal */
                txtCerrar: {
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: 500
                },

})