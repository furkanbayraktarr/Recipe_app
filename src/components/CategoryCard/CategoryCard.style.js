import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container:{
        flexDirection:'row',
        margin:10,
        marginRight:0,
        marginLeft:20,
        backgroundColor:'white',
        borderTopLeftRadius:50,
       borderBottomLeftRadius:50,
        
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'white',
       borderTopLeftRadius:50,
       borderBottomLeftRadius:50,
    },
    body_container:{
        flex:1,
        justifyContent:'center',
        padding:5,
    },
    title:{
        fontSize:25,
        color:'black',
        padding: 10,
        fontWeight:"500"
    },
})