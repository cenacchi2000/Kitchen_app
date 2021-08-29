import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import Constants from "expo-constants";
import { Styles } from "./Style";
import colors from "../../config/colors";
import AppTextButton from "../AppTextButton/AppTextButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";

function DetailCard({
  onActivityIndi,
  onActivityInd3,
  props,
  item,
  onUpdateLastCheck,
  onDeleteIngredient,
}) {
  return (
    <View style={Styles.container}>
      <View style={Styles.nameWrapper}>
        <Text numberOfLines={1} style={Styles.nameText}>
          {item.name}
        </Text>
      </View>

      <View style={Styles.brandWrapper}>
        <Text numberOfLines={1} style={Styles.brandTextHardCoded}>
          Brand
        </Text>
        <Text numberOfLines={1} style={Styles.brandName}>
          {item.brandName}
        </Text>
      </View>
      <View style={Styles.categoryWrapper}>
        <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
          Category{" "}
        </Text>
        <Text numberOfLines={1} style={Styles.categoryName}>
          {item.category}
        </Text>
      </View>
      <View style={Styles.categoryWrapper}>
        <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
          Location
        </Text>
        <Text numberOfLines={1} style={Styles.categoryName}>
          {item.location}
        </Text>
      </View>
      <View style={Styles.categoryWrapper}>
        <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
          Confection type
        </Text>
        <Text numberOfLines={1} style={Styles.categoryName}>
          {item.confectionType}
        </Text>
      </View>

      {item.confectionType === "fresh" ? (
        <>
          {/* ripness */}
          <View
            style={[
              Styles.categoryWrapper,
              {
                marginLeft: 25,
              },
            ]}
          >
            <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
              Ripeness
            </Text>
            <Text
              numberOfLines={1}
              style={[
                Styles.categoryName,
                {
                  marginLeft: -13,
                },
              ]}
            >
              {item.ripeness}
            </Text>
          </View>

          {/* ripness edit date */}
          <View
            style={[
              Styles.categoryWrapper,
              {
                marginLeft: 25,
              },
            ]}
          >
            <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
              Ripeness edited
            </Text>
            <Text
              numberOfLines={1}
              style={[
                Styles.categoryName,
                {
                  marginLeft: -13,
                },
              ]}
            >
              {item.ripenessEditedDate}
            </Text>
          </View>

          {/* last check button */}
          {onActivityIndi ? (
            <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
          ) : (
            <View
              style={[
                Styles.categoryWrapper,
                {
                  marginLeft: 25,
                },
              ]}
            >
              <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
                Last check
              </Text>
              <AppTextButton
                onSubmit={() => onUpdateLastCheck()}
                buttonStyle={{
                  marginLeft: -13,
                  backgroundColor:
                    item.lastCheckDate < 3 ? "green" : colors.red,
                  height: RFPercentage(3.3),
                  borderRadius: 25,
                }}
                textStyle={{ fontSize: RFPercentage(1.5) }}
                name={
                  item.lastCheckDate === null
                    ? "No cheked"
                    : `${item.lastCheckDate} Days ago`
                }
              />
            </View>
          )}
        </>
      ) : null}

      <View style={Styles.categoryWrapper}>
        <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
          Frozen
        </Text>
        <Text numberOfLines={1} style={Styles.categoryName}>
          {item.frozen}
        </Text>
      </View>
      <View style={Styles.categoryWrapper}>
        <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
          Open
        </Text>
        <Text numberOfLines={1} style={Styles.categoryName}>
          {item.openClose}
        </Text>
      </View>
      <View style={Styles.categoryWrapper}>
        <Text numberOfLines={1} style={Styles.categoryTextHardCoded}>
          Expiration Date
        </Text>
        <Text numberOfLines={1} style={Styles.categoryName}>
          {item.expirationDate}
        </Text>
      </View>

      <View style={Styles.bottomContainer}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("updateIngredients", {
              ingredientDetails: item,
            })
          }
          activeOpacity={0.8}
          style={Styles.editWrapper}
        >
          <Text numberOfLines={1} style={Styles.editText}>
            Edit
          </Text>
          <MaterialCommunityIcons
            name="pencil"
            size={RFPercentage(2.2)}
            color={"#6f9cdb"}
          />
        </TouchableOpacity>

        {onActivityInd3 ? (
          <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
        ) : (
          <TouchableOpacity
            onPress={() => onDeleteIngredient()}
            activeOpacity={0.8}
            style={Styles.deleteWrapper}
          >
            <Text numberOfLines={1} style={Styles.deleteText}>
              Delete{" "}
            </Text>
            <MaterialCommunityIcons
              name="trash-can"
              size={RFPercentage(2.2)}
              color={colors.red}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}


export default DetailCard;
