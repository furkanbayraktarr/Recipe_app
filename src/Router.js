import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./pages/Detail";
import Category from "./pages/Category";
import Meal from "./pages/Meal"



const Stack = createNativeStackNavigator()

function Router() { 
    return(

        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= 'categoryPage' component={Category}
            options={{title:"Categories", headerTitleStyle:{ color:'#008080',fontSize:25 }, 
            headerStyle:{backgroundColor:'white',}, headerTitleAlign: 'center'}}/>
            <Stack.Screen name='mealPage' component={Meal}
            options={{title:"Meals", headerTitleStyle:{color:'#008080',fontSize:25}, 
            headerStyle:{backgroundColor:'white'}, headerTitleAlign: 'center'}}  />
            <Stack.Screen name='detailPage'  component={Detail} 
            options={{title:"Detail", headerTitleStyle:{color:'#008080',fontSize:25}, 
            headerStyle:{backgroundColor:'white'}, headerTitleAlign: 'center'}}/>

        </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Router