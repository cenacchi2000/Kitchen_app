import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../config/colors";

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: RFPercentage(1.2),
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: colors.primary,
    height: RFPercentage(6),
  },
  fullRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    color: colors.grey,
    padding: RFPercentage(1),
    fontSize: RFPercentage(2.2),
  },
  rightButtonText: {
    fontWeight: Platform.OS === "ios" ? "500" : "bold",
    color: colors.primary,
    fontSize: RFPercentage(2),
  },
  rightIconContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  rightButton: {
    width: "20%",
  },
});
