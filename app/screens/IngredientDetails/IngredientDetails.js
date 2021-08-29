import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { RFPercentage } from "react-native-responsive-fontsize";
import Toast from "toastify-react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import { DetailCard } from "../../components";
import {
  getIngredientDetails,
  updateRipnessCheck,
  removeIngredient,
} from "../../services/ingredientsService";
import GetSqlDate from "../../components/commmon/GetSqlDate";
import DatesDifference from "../../components/commmon/DatesDifference";
import { Styles } from "./IngredientsDetailsstyles";

function IngredientDetails(props) {
  const [activityIndi, setActivityIndi] = useState(false);
  const [activityIndi2, setActivityIndi2] = useState(false);
  const [activityIndi3, setActivityIndi3] = useState(false);
  const [toastify, setToastify] = useState(false);
  const [item, setItem] = useState({});

  const deleteIngredient = async () => {
    try {
      setActivityIndi3(true);
      await removeIngredient(item.id);
      toastify.success("Successfully Deleted");
      setTimeout(() => {
        props.navigation.navigate("home");
      }, 2000);
    } catch (error) {
      console.log("Deleteion Error: ", error);
      toastify.error("Deletion Error");
    }
    setActivityIndi3(false);
  };

  const getIngredient = async (id) => {
    try {
      setActivityIndi(true);
      const { data } = await getIngredientDetails(id);
      let itemDetails = data[0];
      itemDetails.ripenessEditedDate = GetSqlDate(
        new Date(itemDetails.ripenessEditedDate)
      );
      itemDetails.expirationDate = GetSqlDate(
        new Date(itemDetails.expirationDate)
      );
      if (itemDetails.lastCheckDate != null) {
        itemDetails.lastCheckDate = DatesDifference(
          new Date(itemDetails.lastCheckDate)
        );
      }
      setItem(itemDetails);
    } catch (error) {
      console.log("Error in getting details: ", error);
      toastify.error("Error in getting details");
    }
    setActivityIndi(false);
  };

  useEffect(() => {
    const id = props.route.params.item.id;
    getIngredient(id);
  }, [props.route.params.item]);

  const updateLastCheck = async () => {
    try {
      setActivityIndi2(true);
      const body = {
        id: item.id,
        lastCheckDate: GetSqlDate(new Date()),
      };
      const { data } = await updateRipnessCheck(body);
      let itemDetails = { ...item };
      itemDetails.lastCheckDate = DatesDifference(new Date(data.lastCheckDate));
      setItem(itemDetails);
      toastify.success("Last check Updated");
    } catch (error) {
      console.log("last check update error: ", error);
      toastify.error("Updation Error");
    }
    setActivityIndi2(false);
  };

  return (
    <View style={Styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Toast ref={(c) => setToastify(c)} />
      {/* Kitchen buddy top container */}
      <View style={Styles.topcontainer}>
        <MaterialCommunityIcons
          onPress={() => props.navigation.navigate("Home")}
          style={Styles.topcontainer_icon}
          name="chevron-left"
          size={RFPercentage(4)}
          color={colors.lightGrey}
        />
        <Text style={Styles.topcontainer_icon_text}>Ingredient Details</Text>
      </View>

      {/* Bottom Contaienr */}
      <View style={Styles.bottomcontainer}>
        <ScrollView style={Styles.bottomcontainer_scrollview}>
          <TouchableOpacity
            activeOpacity={1}
            style={Styles.bottomcontainer_scrollview_touchable}
          >
            {activityIndi ? (
              <ActivityIndicator
                color={colors.primary}
                size={RFPercentage(6)}
              />
            ) : (
              <DetailCard
                props={props}
                onDeleteIngredient={() => deleteIngredient()}
                onActivityInd3={activityIndi3}
                onActivityIndi={activityIndi2}
                item={item}
                onUpdateLastCheck={() => updateLastCheck()}
              />
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default IngredientDetails;
