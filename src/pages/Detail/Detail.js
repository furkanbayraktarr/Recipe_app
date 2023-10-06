import React from "react"
import {SafeAreaView,FlatList, Text, StyleSheet} from "react-native"
import useFetch from "../../hooks/useFetch"
import Loading from "../../components/Loading"
import Error from "../../components/Error"
import Config from "react-native-config"
import DetailCard from "../../components/DetailCard"


function Detail({route}) {

const {idMeal} = route.params

const {data , error, loading} = useFetch(`${Config.API_URL}lookup.php?i=${idMeal}`) 


const renderDetail= ({item}) => <DetailCard detail={item}  />

if(loading){
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
        <SafeAreaView>
        <FlatList
        data={data.meals}
        renderItem={renderDetail}
        />
        </SafeAreaView>
    )
}
export default Detail


