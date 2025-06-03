import { StyleSheet } from "react-native";

export const styles_Inicio = StyleSheet.create({

    mainContainer: {
        backgroundColor: '#5271FF',
        width: 300,
        height: 350,
        margin: 'auto',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.1,
        borderRadius: 10
    },

        //Text: Label Nombre del usuario
        txtLabelUsuario: {
            color: 'white',
            fontSize: 20,
            textAlign: 'center'
        },

        //Text: Nombre del usuario 
        txtNombreUsuario: {
            color: 'white',
            fontSize: 20,
            fontWeight: 300,
            textAlign: 'center'
        },

        //Text: Pasos
        txtPasos: {
            color: 'white',
            fontSize: 20,
            fontWeight: 200,
            textAlign: 'center',
            marginTop: 20
        },

        //TouchableOpacity: Sincronizar dispositivo
        touchSinc: {
            backgroundColor: '#004AAD',
            marginTop: 20,
            padding: 10
        },

            //Text: Sincronizar dispositivo
            txtSinc: {
                textAlign: 'center',
                fontFamily: 'Karantina',
                color: 'white'
            }
})