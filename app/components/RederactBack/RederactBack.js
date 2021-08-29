import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import colors from "../../config/colors";
import { Styles } from "./Style";

function RederactBack({ onPressBtn, text, button_name }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.textWrapper}>
        <Text style={Styles.backText}>{text}</Text>
        <TouchableOpacity onPress={onPressBtn}>
          <Text style={Styles.buttonName}>{button_name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RederactBack;
