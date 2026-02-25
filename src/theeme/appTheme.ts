import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, QUARTERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constans";

export const stylesGlobal = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingTop: 70

    },
    containerBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 40
    },
    titleWelcome: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: QUARTERNARY_COLOR,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 7

    },
    containerImput: {
        marginVertical: 15
    },
    button: {
        backgroundColor: TERTIARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonTex: {
        textAlign: 'center',
        color: SECONDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold'
    },
    iconPassword: {
        position: 'absolute',
        bottom: 15,
        right: 10
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 16,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textPrice: {
        textAlign: 'center',
    },
    containerCard: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderRadius: 3,
        borderStyle: 'solid',
        margin: 7,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 2
    },
    titleCard: {
        fontWeight: 'bold',
        fontSize: 16
    },
    imageCard: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    iconCard: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 2
    },
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'

    },
    bodyModal: {

        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10,
        padding: 20
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#cfcfcf',
        borderBottomWidth: 1,
        padding: 10,

    },
    titleModal: {
        fontWeight: 'bold',
        fontSize: 18
    },
    imageModal: {
        width: '60%',
        height: 200,
        borderRadius: 10,
        marginTop: 10
    },
    containerQuantity:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    buttonQuantity:{
        backgroundColor: TERTIARY_COLOR,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin:15
    },
    textQuantity:{
        color: SECONDARY_COLOR,
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    textTotalPrice:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    textStock:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginTop: 10
    }

})