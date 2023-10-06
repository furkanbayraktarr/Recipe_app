import React from "react"
import { TouchableWithoutFeedback,View, Text, Image } from "react-native"
import styles from "./MealCard.style"

function MealCard({onSelect, meal}) {

    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >
        <Image style={styles.image} source={{uri:meal.strMealThumb}}/>
        <View style={styles.textContainer} >
        <Text style={styles.title} >{meal.strMeal}</Text>
        </View>
        </View>
    </TouchableWithoutFeedback>

    
)}

export default MealCard
/*<Text style={styles.title} >{meal.strMeal}</Text>*/