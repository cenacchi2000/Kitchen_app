import { StyleSheet, Dimensions, Platform } from "react-native";

import Constants from "expo-constants";
import colors from "../colors../config/colors";
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
  topcontainer: {
    backgroundColor: colors.primary,
    height: RFPercentage(16),
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topcontainer_icon: {
    position: "absolute",
    top: RFPercentage(2.5),
    left: RFPercentage(2),
    opacity: 0.8,
  },
  topcontainer_icon_text: {
    top: RFPercentage(2),
    color: colors.white,
    fontSize: Platform.OS === "ios" ? RFPercentage(2.5) : RFPercentage(4.5),
  },
  bottomcontainer: {
    marginTop: -RFPercentage(7),
    borderTopLeftRadius: RFPercentage(8),
    backgroundColor: colors.lightGrey,
    width: "100%",
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomcontainer_scrollview: {
    width: "100%",
    marginLeft: "15%",
    marginTop: RFPercentage(6),
  },
  bottomcontainer_scrollview_touchable: {
    margin: RFPercentage(1),
    marginBottom: RFPercentage(2),
    marginRight: RFPercentage(2),

    backgroundColor: "white",
    // backgroundColor: (item.id % 2 == 0) ? colors.primary : "white",
    shadowColor: "#b5b5b5",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 7,

    borderRadius: RFPercentage(2),
    width: RFPercentage(40),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
