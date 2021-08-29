import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Card from "../../components/Card/Card";
import AppTextButton from "../../components/AppTextButton/AppTextButton";
import GetSqlDate from "../../components/commmon/GetSqlDate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getIngredientsByFilters } from "../../services/ingredientsService";
import {
  getCategories,
  getLocations,
  getConfectionTypes,
} from "../../services/otherServices";
import { Styles } from "./Categoriesstyles";
import { CrossPicker } from "./Components/CrossPicker";

function Categories(props) {
  const [activityIndic, setActivityIndic] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [confection, setConfection] = useState("");
  const [categoryList, setCategoryList] = useState([{ label: "", value: "" }]);
  const [locationList, setLocationList] = useState([{ label: "", value: "" }]);
  const [confectionList, setConfectionList] = useState([
    { label: "", value: "" },
  ]);

  useEffect(() => {
    getIngredients();
    allCategories();
    allLocations();
    allConfectionTypes();
  }, []);

  const allCategories = async () => {
    try {
      const { data } = await getCategories();
      let list = data.map((item) => {
        return { label: item.name, value: item.name };
      });
      list = [...list, { label: "all", value: "all" }];
      setCategoryList(list);
    } catch (error) {
      console.log(error);
      // Toastify.error('Error in getting categories');
    }
  };

  const allLocations = async () => {
    try {
      const { data } = await getLocations();
      let list = data.map((item) => {
        return { label: item.name, value: item.name };
      });
      list = [...list, { label: "all", value: "all" }];
      setLocationList(list);
    } catch (error) {
      console.log(error);
      // Toastify.error('Error in getting categories');
    }
  };

  const allConfectionTypes = async () => {
    try {
      const { data } = await getConfectionTypes();
      let list = data.map((item) => {
        return { label: item.name, value: item.name };
      });
      list = [...list, { label: "all", value: "all" }];
      setConfectionList(list);
    } catch (error) {
      console.log(error);
      // Toastify.error('Error in getting categories');
    }
  };

  const getIngredients = async () => {
    try {
      setActivityIndic(true);
      const userId = await AsyncStorage.getItem("token");
      let category1 = category === "" ? "all" : category;
      let location1 = location === "" ? "all" : location;
      let confection1 = confection === "" ? "all" : confection;

      const { data } = await getIngredientsByFilters(
        userId,
        category1,
        location1,
        confection1
      );
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
        <Text style={Styles.topcontainer_text}>Apply Filters</Text>
      </View>
      {/* Bottom Contaienr */}
      <View style={Styles.bottomcontainer}>
        {/* Fliters */}
        {/* drop down Category */}
        <View style={Styles.bottomcontainer_view}>
          <CrossPicker  
           items={categoryList}
           setItem={setCategory}
           selectedItem={category}
           placeholder={"Select Category"}
          />
          {/* drop down location */}
          <CrossPicker  
           items={locationList}
           setItem={setLocation}
           selectedItem={location}
           placeholder={"Select Location"}
          />
        </View>
        <View style={Styles.bottomcontainer_view2}>
          {/* drop down confection */}
          <CrossPicker  
           items={confectionList}
           setItem={setConfection}
           selectedItem={confection}
           placeholder={"Select Confection"}
          />
          {/* search button */}
          <View style={Styles.bottomcontainer_view2_view}>
            <AppTextButton
              onSubmit={() => getIngredients()}
              name="Search"
              width="80%"
              buttonStyle={{
                backgroundColor: colors.primary,
                borderRadius: 25,
                height: RFPercentage(5.5),
              }}
            />
          </View>
        </View>
        {activityIndic ? (
          <View style={Styles.bottomcontainer_view3}>
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
                style={Styles.bottomcontainer_view3_touchableopacity}
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

export default Categories;
