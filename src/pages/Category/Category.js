import React from "react";
import { SafeAreaView,FlatList,Text, StyleSheet} from "react-native";
import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import CategoryCard from "../../components/CategoryCard";


function Category({navigation}) {

   const {data,error,loading} = useFetch(`${Config.API_URL}categories.php`)
   const handleCategorySelect = (categoryName) => {
    return(
        navigation.navigate("mealPage", {categoryName})
    )
    
   }
   const renderCategory = ({item}) => <CategoryCard category={item} onSelect={()=> handleCategorySelect(item.strCategory)}/>

   if(loading) {
    return(
    <Loading/> 
   )}

   if(error){
    return(
        <>
        <Text style = {{fontSize:25, fontWeight:'bold', color:'black'}}>{error}!!!</Text>
        <Error />
        </>

)
   }

    return( 
    <SafeAreaView style={styles.container} >
        <FlatList
        data={data.categories}
        renderItem={renderCategory}
        />
    </SafeAreaView>
        
    )
}
 export default Category

 const styles =  StyleSheet.create({
    container:{
        backgroundColor:'#008080',
        padding:10,
    }
 })




