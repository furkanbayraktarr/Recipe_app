import React from "react";
import { SafeAreaView,Image,Text, View,  TouchableOpacity, Linking } from "react-native";
import styles from "./DetailCard.style"

function DetailCard({detail}) {

    const handleButtonSelect = () => {
        const youtubeLink = detail.strYoutube
        return(
            Linking.openURL(youtubeLink).catch((err) =>
            console.error("Error: ", err)
          )
            
        )
    }

    return(
        <SafeAreaView style={styles.container} >
        <Image style= {styles.image} source={{uri:detail.strMealThumb}}  />
        <View style= {styles.body_container} >
    <Text style= {styles.title} >{detail.strMeal}</Text>
    <Text style= {styles.instructions} >{detail.strInstructions}</Text>
    
    </View>
    <TouchableOpacity style={styles.button} onPress={handleButtonSelect}> 
    <Text style={styles.text_button} >Watch on Youtube</Text>
    </TouchableOpacity>
    </SafeAreaView>
    )
}




export default DetailCard