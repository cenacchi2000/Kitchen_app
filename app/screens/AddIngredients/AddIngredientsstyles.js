import { StyleSheet ,Platform } from "react-native";

import colors from "../../config/colors";
import Constants from "expo-constants";
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
  topcontainer: {
    backgroundColor: colors.primary,
    height: RFPercentage(16),
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topcontainer_icons: {
    position: "absolute",
    top: RFPercentage(2.5),
    left: RFPercentage(2),
    opacity: 0.8,
  },
  topcontainer_text: {
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
    marginTop: RFPercentage(2),
  },
  bottomcontainer_view: {
    flexDirection: "column",
    marginTop: RFPercentage(6),
    width: "85%",
  },
  bottomcontainer_view_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_view_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_view2: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  bottomcontainer_view2_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_view2_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_view3: {
    marginBottom: RFPercentage(3),
    marginTop: RFPercentage(3),
    width: "85%",
    flex: 1,
    alignItems: "flex-end",
  },
});
