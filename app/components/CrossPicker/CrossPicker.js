import React from "react";
import { View, Text } from "react-native";

import { Styles } from "./Styles";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReactNativeCrossPicker from "react-native-cross-picker";
import { RFPercentage } from "react-native-responsive-fontsize";

const CrossPicker = ({ item, placeholder, selectedItem, setItem, title }) => {

  const iconCategory = () => {
    return (
      <MaterialCommunityIcons
        name={"chevron-down"}
        size={20} 
        color={"grey"} 
        />
    );
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.titleWrapper}>
        <Text style={Styles.titleText}>{title}</Text>
      </View>
      <ReactNativeCrossPicker
        placeHolderSize={RFPercentage(2.2)}
        modalTextStyle={{ color: colors.primary }}
        mainComponentStyle={Styles.mainComponent}
        iconComponent={iconCategory}
        items={item}
        setItem={setItem}
        selectedItem={selectedItem}
        placeholder={placeholder}
        modalMarginTop={RFPercentage(77)}
      />
    </View>
  );
};

export default CrossPicker;
