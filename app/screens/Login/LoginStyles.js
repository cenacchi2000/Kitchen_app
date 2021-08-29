import { StyleSheet, Dimensions,Platform } from "react-native";

import Constants from "expo-constants";
import colors from "../../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Styles = StyleSheet.create({
  topcontainer: {
    backgroundColor: colors.primary,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  topcontainer_view: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topcontainer_view_image: {
    marginBottom: RFPercentage(5),
    width: RFPercentage(32),
    height: RFPercentage(10),
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
  bottomContainer: {
    marginTop: -RFPercentage(7),
    borderTopLeftRadius: RFPercentage(8),
    backgroundColor: colors.lightGrey,
    width: "100%",
    flex: 1.8,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  loginHardCodedWrapper: {
    marginTop: RFPercentage(6.5),
    width: "85%",
    alignItems: "center",
  },
  loginHardCodedText: {
    color: colors.primary,
    fontSize: Platform.OS === "ios" ? RFPercentage(3.5) : RFPercentage(5.5),
  },
});
