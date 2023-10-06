import {Dimensions, StyleSheet} from 'react-native'

const deviceSize = Dimensions.get("window")
 
export default StyleSheet.create({
  
    image:{
       width:deviceSize.width,
       height:450,
       backgroundColor:'white',
       resizeMode:"stretch"
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        color:'#008080',
        marginTop:10,
        marginRight:10,
        marginLeft:5,
        padding: 5,
    },
    instructions:{
        fontSize:20,
        color:'black',
        padding: 10,
        backgroundColor:''
    },
    body_container:{
        padding:5,
},
button:{
    backgroundColor:'#008080',
    padding:10,
    margin: 10,
    marginBottom:25,
    borderRadius:5,
},
text_button:{
    color:'white',
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'
}
})