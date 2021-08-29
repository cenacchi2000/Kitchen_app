import React from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Button } from "react-native-paper";
import { Styles } from "./Styles";

function AppTextButton({
  name,
  icon,
  onSubmit,
  width,
  height = RFPercentage(6),
  borderRadius = 25,
  backgroundColor = "black",
  iconSize = 20,
  iconLeft,
  buttonStyle,
  textStyle,
}) {
  return (
    <Button
      width={width}
      color={backgroundColor}
      mode="contained"
      onPress={() => onSubmit()}
      style={{
        height,
        borderBottomEndRadius: borderRadius,
        borderBottomStartRadius: borderRadius,
        borderTopStartRadius: borderRadius,
        justifyContent: "center",
        ...buttonStyle,
      }}
    >
      {iconLeft ? (
        <MaterialCommunityIcons
          style={[
            Styles.leftIcon,
            {
              paddingRight: name ? 0 : RFPercentage(1.6),
            },
          ]}
          color="white"
          size={iconSize}
          name={iconLeft}
        />
      ) : null}
      {name ? (
        <Text numberOfLines={1} style={[Styles.nameText, { ...textStyle }]}>
          {name}
        </Text>
      ) : null}
      {icon ? (
        <MaterialCommunityIcons
          style={[Styles.icon, { paddingLeft: name ? 0 : RFPercentage(1.6) }]}
          color="white"
          size={iconSize}
          name={icon}
        />
      ) : null}
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppTextButton;
