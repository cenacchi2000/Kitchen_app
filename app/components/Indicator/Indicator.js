import React from "react";
import { ActivityIndicator, View } from "react-native";
import colors from "../../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Styles } from "./Styles";

const Indicator = (props) => {
  return (
    <View style={Styles.container}>
      <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
    </View>
  );
};

export default Indicator;
