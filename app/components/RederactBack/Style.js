import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../config/colors";

export const Styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.lightGrey,
  },
  textWrapper: {
    marginBottom: RFPercentage(5),
    marginLeft: "7.5%",
    width: "85%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  backText: {
    color: "grey",
    fontSize: RFPercentage(1.7),
  },
  buttonName: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: RFPercentage(1.7),
  },
});
