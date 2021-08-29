import React from "react";
import { StyleSheet } from "react-native";

import Constants from "expo-constants";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../config/colors";

export const Styles = StyleSheet.create({
  container: {
    padding: RFPercentage(2),
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  nameWrapper: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    padding: RFPercentage(1.3),
    color: colors.primaryLight,
    fontSize: RFPercentage(3.8),
    fontWeight: Constants.platform === "ios" ? "300" : "bold",
  },
  brandWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
  },
  brandTextHardCoded: {
    paddingTop: RFPercentage(1.2),
    width: "56%",
    paddingBottom: RFPercentage(1.2),
    color: colors.primaryLight,
    fontSize: RFPercentage(2.6),
    fontWeight: Constants.platform === "ios" ? "300" : "bold",
  },
  brandName: {
    paddingTop: RFPercentage(1.2),
    paddingBottom: RFPercentage(1.3),
    width: "44%",
    color: colors.grey,
    fontSize: RFPercentage(2.2),
    fontWeight: Constants.platform === "ios" ? "300" : "bold",
  },
  categoryWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
  },
  categoryTextHardCoded: {
    paddingTop: RFPercentage(1.2),
    width: "56%",
    paddingBottom: RFPercentage(1.2),
    color: colors.primaryLight,
    fontSize: RFPercentage(2.6),
    fontWeight: Constants.platform === "ios" ? "300" : "bold",
  },
  categoryName: {
    paddingTop: RFPercentage(1.2),
    paddingBottom: RFPercentage(1.3),
    width: "44%",
    color: colors.grey,
    fontSize: RFPercentage(2.2),
    fontWeight: Constants.platform === "ios" ? "300" : "bold",
  },
  bottomContainer: {
    marginTop: RFPercentage(2),
    marginBottom: RFPercentage(1),
    flexDirection: "row",
    marginLeft: RFPercentage(1),
    marginRight: RFPercentage(1),
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  editWrapper: {
    flexDirection: "row",
    borderRadius: RFPercentage(3),
    borderWidth: 1,
    borderColor: "#6f9cdb",
    padding: RFPercentage(1),
    paddingLeft: RFPercentage(1.7),
    paddingRight: RFPercentage(1.7),
  },
  editText: {
    fontSize: RFPercentage(2.2),
    color: "#6f9cdb",
    marginRight: 5,
  },
  deleteWrapper: {
    flexDirection: "row",
    borderRadius: RFPercentage(3),
    borderWidth: 1,
    borderColor: colors.red,
    padding: RFPercentage(1),
    paddingLeft: RFPercentage(1.7),
    paddingRight: RFPercentage(1.7),
  },
  deleteText: {
    fontSize: RFPercentage(2.2),
    color: colors.red,
    marginRight: 5,
  },
});
