import React from "react";
import { Text } from "react-native";
import ReactNativeCrossPicker from "react-native-cross-picker";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../../config/colors";
import {Styles} from "../BarcodeAddstyles";




export const CrossPicker = ({
    title,
    list,
    setItem,
    selectedItem,
    iconCategory,
    placeholder
}) => {
  return (
    <View style={Styles.bottomcontainer_scrollview_view6}>
      <View style={Styles.bottomcontainer_scrollview_view6_view}>
        <Text style={Styles.bottomcontainer_scrollview_view6_view_text}>
            {title}
        </Text>
      </View>
      <ReactNativeCrossPicker
        placeHolderSize={RFPercentage(2.2)}
        modalTextStyle={{ color: colors.primary }}
        mainComponentStyle={{
          marginLeft: "10%",
          height: RFPercentage(6),
          borderColor: colors.primary,
          borderWidth: 1,
        }}
        iconComponent={iconCategory}
        items={list}
        width={"90%"}
        setItem={setItem}
        selectedItem={selectedItem}
        placeholder={placeholder}
        modalMarginTop={RFPercentage(67)}
      />
    </View>
  );
};
