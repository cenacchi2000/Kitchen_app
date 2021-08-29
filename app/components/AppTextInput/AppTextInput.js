import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import colors from "../../config/colors";
import { Styles } from "./Styles";

function AppTextInput({
  rightIcon = false,
  rightFunction,
  borderWidth = 0,
  placeHolder,
  value,
  onChange,
  width = "100%",
  icon,
  rightButtonText,
  secure = false,
  iconType = "MaterialCommunityIcons",
  editable = true,
  startEdit,
  endEdit,
}) {
  const [focus, setFocus] = useState(false);

  return (
    <View
      style={[
        Styles.container,
        {
          width: width,
          borderWidth: borderWidth,
        },
      ]}
    >
      <View style={Styles.fullRow}>
        {iconType === "MaterialIcons" ? (
          <MaterialIcons
            color={colors.grey}
            style={{ padding: RFPercentage(1), paddingRight: 0 }}
            size={RFPercentage(2.2)}
            name={icon}
          />
        ) : (
          <MaterialCommunityIcons
            color={colors.mediumGrey}
            style={{ padding: RFPercentage(1), paddingRight: 0 }}
            size={RFPercentage(3)}
            name={icon}
          />
        )}

        <TextInput
          style={[
            Styles.textInput,
            {
              width: rightButtonText ? "70%" : "90%",
              width: rightIcon ? "80%" : "90%",
            },
          ]}
          placeholder={placeHolder}
          onFocus={() => setFocus(true)}
          onEndEditing={() => setFocus(false)}
          value={value}
          secureTextEntry={secure}
          editable={editable}
          onChangeText={(text) => onChange(text)}
          onResponderStart={startEdit}
          onSubmitEditing={endEdit}
        />
        {rightButtonText ? (
          <TouchableOpacity key={1} style={Styles.rightButton}>
            <Text style={Styles.rightButtonText}>{rightButtonText}</Text>
          </TouchableOpacity>
        ) : null}

        {rightIcon ? (
          <TouchableOpacity
            key={"2"}
            onPress={() => rightFunction()}
            style={Styles.rightIconContainer}
          >
            <MaterialCommunityIcons
              key={"3"}
              color={colors.grey}
              style={{ right: RFPercentage(1) }}
              size={RFPercentage(3)}
              name={rightIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

export default AppTextInput;
