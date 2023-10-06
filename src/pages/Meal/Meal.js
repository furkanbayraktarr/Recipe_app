import React from "react"
import { SafeAreaView, Text, FlatList , StyleSheet} from "react-native"
import MealCard from "../../components/MealCard"
import Loading from "../../components/Loading"
import Error from "../../components/Loading"
import useFetch from "../../hooks/useFetch"
import Config from "react-native-config"

function Meal({route, navigation}) {

    const {categoryName} = route.params

    const {data,error,loading} = useFetch(`${Config.API_URL}filter.php?c=${categoryName}`)

    const handleMealSelect = (idMeal) => {
        return(
            navigation.navigate("detailPage", {idMeal})
        )
    }

    const renderMeal = ({item}) => <MealCard meal={item} onSelect={()=> handleMealSelect(item.idMeal)} />

    if (loading) {
        return(
            <Loading/> 
        )
    }

    if(error){
        return(
            <>
        <Text style = {{fontSize:25, fontWeight:'bold', color:'black'}}>{error}!!!</Text>
        <Error />
        </>
        )
    }

    return(
<SafeAreaView  style={styles.container} >
     <FlatList
      data={data.meals}
      renderItem={renderMeal}
    />
</SafeAreaView>
)}

export default Meal

const styles =  StyleSheet.create({
    container:{
        backgroundColor:'#008080',
    }
 })