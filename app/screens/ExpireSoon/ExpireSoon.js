import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { RFPercentage } from "react-native-responsive-fontsize";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Card from "../../components/Card/Card";
import GetSqlDate from "../../components/commmon/GetSqlDate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getExpireSoonIngredients } from "../../services/ingredientsService";
import { Styles } from "./Expiresoonstyles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ExpireSoon(props) {
  const [activityIndic, setActivityIndic] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const getIngredients = async () => {
    try {
      setActivityIndic(true);
      const userId = await AsyncStorage.getItem("token");
      let expirationDate = GetSqlDate(new Date(date));
      const { data } = await getExpireSoonIngredients(userId, expirationDate);
      const allIngredients = data.map((item) => {
        item.expirationDate = GetSqlDate(new Date(item.expirationDate));
        return item;
      });
      setIngredients(allIngredients);
    } catch (error) {
      console.log("Error All ingredients: ", error);
    }
    setActivityIndic(false);
  };

  useEffect(() => {
    getIngredients();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />

      {/* Top container */}
      {/* Kitchen buddy top container */}
      <View style={Styles.topcontainer}>
        <MaterialCommunityIcons
          onPress={() => props.navigation.navigate("Home")}
          style={Styles.topcontainer_icons}
          name="chevron-left"
          size={RFPercentage(4)}
          color={colors.lightGrey}
        />
        <Text style={Styles.topcontainer_text}>Expire Soon</Text>
      </View>

      {/* Bottom Contaienr */}
      <View style={Styles.bottomcontainer}>
        {/* Fliter */}
        {/* dateTimePicker component */}
        <View style={Styles.bottomcontainer_view}>
          <View style={Styles.bottomcontainer_view_view}>
            <View style={{ width: "26%" }}>
              <Text style={Styles.bottomcontainer_view_view_text}>
                How Soon
              </Text>
            </View>

            <View style={Styles.bottomcontainer_view_view2}>
              <TouchableOpacity
                style={Styles.bottomcontainer_view_view2_touchable}
                onPress={() => setShow(true)}
              >
                <Text style={Styles.bottomcontainer_view_view2_touchable_text}>
                  {date.toDateString()}
                </Text>
              </TouchableOpacity>
              {Platform.OS === "ios" ? (
                <TouchableOpacity
                  style={{ width: "20%" }}
                  onPress={() => setShow(true)}
                >
                  <Text
                    onPress={() => setShow(false)}
                    style={Styles.bottomcontainer_view_view2_touchable_text2}
                  >
                    Done
                  </Text>
                </TouchableOpacity>
              ) : null}
            </View>

            {/* search button */}
            <TouchableOpacity
              onPress={() => getIngredients()}
              style={Styles.bottomcontainer_view_view2_touchable2}
            >
              <MaterialIcons
                name="search"
                size={RFPercentage(3.5)}
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
          {show && (
            <DateTimePicker
              style={{ width: 320, backgroundColor: "white" }}
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        {activityIndic ? (
          <View style={Styles.bottomcontainer_view2}>
            <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
          </View>
        ) : (
          <FlatList
            style={{ marginTop: RFPercentage(3) }}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={ingredients}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("ingredientDetails", { item })
                }
                activeOpacity={0.9}
                style={Styles.bottomcontainer_view_flatlist}
              >
                <Card
                  title={item.name}
                  confectionType={item.confectionType}
                  expirationDate={item.expirationDate}
                  location={item.location}
                  category={item.category}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  loginButton: {
    marginTop: RFPercentage(5),
    width: "85%",
    flex: 1,
    alignItems: "flex-end",
  },
});

export default ExpireSoon;
