import React from "react";
import { View } from "react-native";
import { Styles } from "../Categoriesstyles";
import colors from "../../../config/colors";
import { RFPercentage } from "react-native-responsive-fontsize";
import ReactNativeCrossPicker from "react-native-cross-picker";

export const CrossPicker = ({ items, setItem, selectedItem, placeholder }) => {
  return (
    <View style={Styles.bottomcontainer_view_view}>
      <ReactNativeCrossPicker
        placeHolderSize={RFPercentage(2.2)}
        modalTextStyle={{ color: colors.primary }}
        mainComponentStyle={{
          borderColor: colors.primary,
          borderWidth: 1,
        }}
        iconComponent={() => null}
        items={items}
        setItem={setItem}
        selectedItem={selectedItem}
        placeholder={placeholder}
        modalMarginTop={RFPercentage(17)}
      />
    </View>
  );
};
