import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  titletext: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  dateContainer: {
    borderColor: colors.primary,
    borderWidth: 1,
    padding: RFPercentage(1.4),
    paddingRight: 0,
    borderRadius: RFPercentage(1),
    width: "100%",
    height: RFPercentage(6),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dateText: {
    fontSize: RFPercentage(2.2),
    color: colors.grey,
    width: "100%",
  },
  doneText: {
    fontSize: RFPercentage(2.2),
    color: colors.primary,
    width: "100%",
  },
  dateTimeContainer: {
    width: 320,
    backgroundColor: "white",
  },
});
