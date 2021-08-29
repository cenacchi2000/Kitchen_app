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
  bottomcontainer_scrollview_view: {
    flexDirection: "column",
    marginTop: RFPercentage(6),
    width: "85%",
  },
  bottomcontainer_scrollview_view_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_scrollview_view_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_scrollview_view2: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  bottomcontainer_scrollview_view2_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_scrollview_view2_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_scrollview_view3: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  bottomcontainer_scrollview_view3_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_scrollview_view3_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_scrollview_view4: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  bottomcontainer_scrollview_view4_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_scrollview_view4_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_scrollview_view5: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  bottomcontainer_scrollview_view5_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_scrollview_view5_view_text: {
    marginLeft: "10%",
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_scrollview_view6: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  bottomcontainer_scrollview_view6_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_scrollview_view6_view_text: {
    marginLeft: "10%",
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_scrollview_view7: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  bottomcontainer_scrollview_view7_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_scrollview_view7_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_scrollview_view8: {
    flexDirection: "column",
    marginTop: RFPercentage(2),
    width: "85%",
  },
  bottomcontainer_scrollview_view8_view: { paddingBottom: RFPercentage(1.2) },
  bottomcontainer_scrollview_view8_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.primaryLight,
  },
  bottomcontainer_scrollview_view8_view_view: {
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
  bottomcontainer_scrollview_view8_view_view_touchable: {
    width: Platform.OS === "ios" ? "80%" : "100%",
  },
  bottomcontainer_scrollview_view8_view_view_text: {
    fontSize: RFPercentage(2.2),
    color: colors.grey,
    width: "100%",
  },
  bottomcontainer_scrollview_view9: {
    marginBottom: RFPercentage(3),
    flexDirection: "row",
    marginTop: RFPercentage(3),
    width: "85%",
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
});
