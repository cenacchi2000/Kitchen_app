import React from "react";
import { StyleSheet, Platform } from "react-native";

import Constants from "expo-constants";
import colors from "../../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  upadateIngredientWrapper: {
    backgroundColor: colors.primary,
    height: RFPercentage(16),
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  brandWrapper: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  brandText: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  nameIngredientWrapper: {
    flexDirection: "column",
    marginTop: RFPercentage(6),
    width: "85%",
  },
  nameIngredinetText: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  scrlView: {
    width: "100%",
    marginLeft: "15%",
    marginTop: RFPercentage(2),
  },
  scrollViewWrapper: {
    marginTop: -RFPercentage(7),
    borderTopLeftRadius: RFPercentage(8),
    backgroundColor: colors.lightGrey,
    width: "100%",
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  updateIngText: {
    top: RFPercentage(2),
    color: colors.white,
    fontSize: Platform.OS === "ios" ? RFPercentage(2.5) : RFPercentage(4.5),
  },
  chevronLeft: {
    position: "absolute",
    top: RFPercentage(2.5),
    left: RFPercentage(2),
    opacity: 0.8,
  },
  updateButtonWrapper: {
    marginBottom: RFPercentage(3),
    marginTop: RFPercentage(3),
    width: "85%",
    flex: 1,
    alignItems: "flex-end",
  },
});
