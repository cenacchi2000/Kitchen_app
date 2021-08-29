import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Login,SignUp,UpdateIngredients,IngredientDetails} from '../screens';
import colors from '../config/colors';
import HomeTabs from './Tabs';

const Stack = createDrawerNavigator();

const RootNavigation=()=>{
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName={'home'} drawerType="front" overlayColor="transparent" edgeWidth={100} drawerStyle={{
        backgroundColor: colors.white,
        width: 0
      }}
      >
        <Stack.Screen name="home" >{(props) => <HomeTabs {...props} />}</Stack.Screen>
        <Stack.Screen name="login" >{(props) => <Login {...props} />}</Stack.Screen>
        <Stack.Screen name="signup" >{(props) => <SignUp {...props} />}</Stack.Screen>
        <Stack.Screen name="ingredientDetails" >{(props) => <IngredientDetails {...props} />}</Stack.Screen>
        <Stack.Screen name="updateIngredients" >{(props) => <UpdateIngredients {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    );
    }
    
    export default RootNavigation;