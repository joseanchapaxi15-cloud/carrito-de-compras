import { StyleSheet } from "react-native";
import { QUARTERNARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constans";

export const stylesGlobal = StyleSheet.create({
    title:{
        color: SECONDARY_COLOR,
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingTop:70

    },
    containerBody:{
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:30,
        paddingTop: 40
    },
    titleWelcome:{
        fontSize:17,
        fontWeight:'bold'
    },
    input:{
        backgroundColor: QUARTERNARY_COLOR,
        paddingHorizontal:20,
        borderRadius:8,
        marginVertical:7
        
    },
    containerImput:{
        marginVertical:15
    },
    button:{
        backgroundColor:TERTIARY_COLOR,
        paddingVertical:15,
        borderRadius:10
    },
    buttonTex:{
        textAlign:'center',
        color:SECONDARY_COLOR,
        fontSize:15,
        fontWeight:'bold'
    }

    
})