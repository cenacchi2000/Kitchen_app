import React from "react";
import {StyleSheet} from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../config/colors";

export const Styles = StyleSheet.create({
    container:{
        marginTop: -RFPercentage(7),
        borderTopLeftRadius: RFPercentage(8),
        backgroundColor: colors.lightGrey,
        width: "100%",
        flex: 1.8,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
})
