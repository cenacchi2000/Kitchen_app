import { StyleSheet, Dimensions, Platform } from "react-native";

import colors from "../config/colors";
import Constants from "expo-constants";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loginButton: {
    marginTop: RFPercentage(5),
    width: "85%",
    flex: 1,
    alignItems: "flex-end",
  },
  topcontainer: {
    backgroundColor: colors.primary,
    height: RFPercentage(28),
    justifyContent: "flex-end",
  },
  topcontainer_image: {
    marginBottom: RFPercentage(1),
    width: windowWidth,
    height: RFPercentage(30),
    alignItems: "center",
    justifyContent: "flex-end",
  },
  topcontainer_image_icon: {
    position: "absolute",
    top: RFPercentage(4),
    right: RFPercentage(2),
    opacity: 0.8,
  },
  topcontainer_view: {
    flexDirection: "column",
    marginTop: -RFPercentage(7),
    borderTopLeftRadius: RFPercentage(8),
    backgroundColor: colors.lightGrey,
    width: "100%",
    flex: 1.8,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomcontainer: {
    flexDirection: "column",
    marginTop: -RFPercentage(7),
    borderTopLeftRadius: RFPercentage(8),
    backgroundColor: colors.lightGrey,
    width: "100%",
    flex: 1.8,
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    margin: RFPercentage(1),
    marginBottom: RFPercentage(1.5),
    marginRight: RFPercentage(2),
    backgroundColor: "white",
    shadowColor: "#b5b5b5",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 7,
    borderRadius: RFPercentage(2),
    width: RFPercentage(20),
    height: RFPercentage(14),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
