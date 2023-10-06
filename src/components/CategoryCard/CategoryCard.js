import React from "react";
import { TouchableWithoutFeedback,Image,Text, View } from "react-native";
import styles from  "./CategoryCard.style"

function CategoryCard({category, onSelect}) {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
            <Image style={styles.image} source={{uri:category.strCategoryThumb}}/>
            <View style={styles.body_container} >
                <Text style={styles.title} >{category.strCategory}</Text>
                </View>
            </View>
           
        </TouchableWithoutFeedback>
    )
}




export default CategoryCard