import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../config/colors";

export const Styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  titleWrapper: {
    paddingBottom: RFPercentage(1.2),
  },
  titleText: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  mainComponent: {
    height: RFPercentage(6),
    borderColor: colors.primary,
    borderWidth: 1,
  },
});
