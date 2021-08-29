import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

import colors from "../../config/colors";
import { Styles } from "./Styles";

function Card({
  index,
  title,
  confectionType,
  expirationDate,
  location,
  category,
}) {
  return (
    <View key={index} style={Styles.conatiner}>
      <View style={Styles.configTypeContainer}>
        <Text numberOfLines={1} style={Styles.configTypeText}>
          {confectionType}
        </Text>
      </View>

      <View style={Styles.titleContainer}>
        <Text numberOfLines={1} style={Styles.titleText}>
          {title}
        </Text>
      </View>

      <View style={Styles.clockContainer}>
        <MaterialCommunityIcons
          style={{ marginTop: 1 }}
          name="clock-outline"
          size={RFPercentage(2)}
          color={"#dbdbdb"}
        />
        <Text numberOfLines={1} style={Styles.expDate}>
          {expirationDate}
        </Text>
      </View>

      <View style={Styles.locationContainer}>
        <MaterialIcons
          style={{ marginTop: 1 }}
          name="location-pin"
          size={RFPercentage(2)}
          color={"#dbdbdb"}
        />
        <Text numberOfLines={1} style={Styles.locationText}>
          {location}
        </Text>
      </View>

      <View style={Styles.categoryContainer}>
        <MaterialIcons
          style={{ marginTop: 1 }}
          name="category"
          size={RFPercentage(1.8)}
          color={"#dbdbdb"}
        />
        <Text numberOfLines={1} style={Styles.categoryText}>
          {category}
        </Text>
      </View>
    </View>
  );
}

export default Card;
