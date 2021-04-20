import React from "react";
import {
    View,
    Text
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from "./screens/Home";
import ItemDetail from "./screens/ItemDetail";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent"
    }
}

const Stack = createStackNavigator();


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ItemDetail" component={ItemDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
