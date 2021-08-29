import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {Home,AddIngredients,BarcodeAddIngredients,ExpireSoon,Categories} from '../screens';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {

  function TabItem(tabname,tablablename,margin_top,icon_name,component){
    return(
      <Tab.Screen
          name={tabname}
          component={component}
          options={{
            tabBarLabel: tablablename,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                style={{ marginTop: margin_top }}
                name={icon_name}
                color={color}
                size={size}
              />
            ),
          }}
        />
    );
  }

    return (
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        style: { height: 60 },
        labelStyle: { fontSize: RFPercentage(1.4), fontWeight: '500', marginBottom: RFPercentage(1.2) },
        activeTintColor: colors.primary, inactiveTintColor: colors.grey, tabStyle: { backgroundColor: colors.white, fontSize: 30 }
      }} >
        
        {/* Tab name, tab lable name , margin top, icon name , component */}
        {TabItem("Home","Home",13,"home",Home)}
        {TabItem("Orders","Add Ingredient",13,"plus",AddIngredients)}
        {TabItem("scaBarcode","Barcode Scan",13,"barcode-scan",BarcodeAddIngredients)}
        {TabItem("categories","Categories",13,"category",Categories)}
        {TabItem("expireSoon","Expire Soon",13,"clock-alert",ExpireSoon)}
      </Tab.Navigator>
    );
  }