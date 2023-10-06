import { StyleSheet} from "react-native";



export default StyleSheet.create( {
    container:{
        flex:1,
        justifyContent: "flex-end",
        marginBottom:5
    },
    image:{
        
        height:300,
        backgroundColor:'white',
        borderRadius:20,
        margin:20,
        marginBottom:0
    },
    title:{
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        width:420,
        padding:1,
        textAlign:'right'
        
        
    },
    textContainer: {
        position: "absolute", 
        bottom: 0,
        marginLeft:20,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: 10,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
},
})