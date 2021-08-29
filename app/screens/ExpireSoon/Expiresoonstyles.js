import { StyleSheet ,Platform } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";


import colors from "../../config/colors";
export const Styles = StyleSheet.create({
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
    flexDirection: "column",
    marginTop: -RFPercentage(7),
    borderTopLeftRadius: RFPercentage(8),
    backgroundColor: colors.lightGrey,
    width: "100%",
    flex: 1.8,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomcontainer_view: { marginTop: RFPercentage(4), width: "85%" },
  bottomcontainer_view_view: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bottomcontainer_view_view_text: {
    fontWeight: Platform.OS == "ios" ? "500" : "bold",
    fontSize: RFPercentage(2.8),
    color: colors.primaryLight,
  },
  bottomcontainer_view_view2: {
    borderColor: colors.primary,
    borderWidth: 0.5,
    padding: RFPercentage(1.4),
    paddingRight: 0,
    borderRadius: RFPercentage(1),
    width: "50%",
    height: RFPercentage(5.5),
    flexDirection: "row",
  },
  bottomcontainer_view_view2_touchable: {
    marginBottom: RFPercentage(0.25),
    width: Platform.OS === "ios" ? "80%" : "100%",
  },
  bottomcontainer_view_view2_touchable_text: {
    fontSize: RFPercentage(2.2),
    color: colors.grey,
    width: "100%",
  },
  bottomcontainer_view_view2_touchable_text2: {
    fontSize: RFPercentage(2.2),
    color: colors.primary,
    width: "100%",
  },
  bottomcontainer_view_view2_touchable2: {
    borderColor: colors.primary,
    borderWidth: 0.5,
    padding: RFPercentage(1.4),
    borderRadius: RFPercentage(1),
    width: "15%",
    height: RFPercentage(5.5),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer_view2: {
    marginTop: RFPercentage(3),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer_view_flatlist: {
    margin: RFPercentage(1),
    marginBottom: RFPercentage(1.5),
    marginRight: RFPercentage(2),

    backgroundColor: "white",
    // backgroundColor: (item.id % 2 == 0) ? colors.primary : "white",
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
