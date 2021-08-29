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
  bottomcontainer_view: {
    flexDirection: "row",
    marginTop: RFPercentage(5),
    width: "85%",
    justifyContent: "space-evenly",
  },
  bottomcontainer_view_view: { flexDirection: "column", width: "45%" },
  bottomcontainer_view2: {
    flexDirection: "row",
    marginTop: RFPercentage(2),
    width: "85%",
    justifyContent: "space-evenly",
  },
  bottomcontainer_view2_view: {
    flexDirection: "column",
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomcontainer_view3: {
    marginTop: RFPercentage(3),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer_view3_touchableopacity: {
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
