import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../config/colors";
import Constants from "expo-constants";

export const Styles = StyleSheet.create({
  conatiner: {
    padding: RFPercentage(2),
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  configTypeContainer: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  configTypeText: {
    borderTopRightRadius: RFPercentage(1.5),
    borderBottomLeftRadius: RFPercentage(1.5),
    backgroundColor: "green",
    padding: RFPercentage(1),
    color: colors.white,
  },
  titleContainer: {
    position: "absolute",
    left: RFPercentage(2),
    top: RFPercentage(1.3),
    width: "75%",
  },
  titleText: {
    color: colors.primaryLight,
    fontSize: RFPercentage(2.7),
    fontWeight: Constants.platform === "ios" ? "300" : "bold",
  },
  clockContainer: {
    width: "70%",
    flexDirection: "row",
    marginLeft: RFPercentage(2),
    padding: 1,
    marginTop: RFPercentage(3),
  },
  expDate: {
    marginLeft: 7,
    color: colors.grey,
    fontSize: RFPercentage(2),
  },
  locationContainer: {
    width: "70%",
    flexDirection: "row",
    marginLeft: RFPercentage(2),
    padding: 1,
  },
  locationText: {
    marginLeft: 7,
    color: colors.grey,
    fontSize: RFPercentage(2),
  },
  categoryContainer: {
    width: "70%",
    flexDirection: "row",
    marginLeft: RFPercentage(2),
    padding: 1,
  },
  categoryText: {
    marginLeft: 7,
    color: colors.grey,
    fontSize: RFPercentage(2),
  },
});
