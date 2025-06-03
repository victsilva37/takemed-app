import { StyleSheet } from "react-native";

export const styles_informacion = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
    /*Text: Título*/
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },

    /*View: Tarjetas de consejos */
    cardConsejos: {
        backgroundColor: "#5271FF",
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },

        /*TARJETAS ANIMADAS*/
        
            /*Text: Título de consejo */
            txtNombreConsejo: {
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 8,
                color: 'white'
            },

            /*Text: Descripción de consejo*/
            txtDescription: {
                fontSize: 13,
                color: "#F4F4F4",
                textAlign: 'justify'
            },
});

