import React, { useState, useEffect } from "react";
import { View, Text, Platform, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "toastify-react-native";

import colors from "../../config/colors";
import {
  AppTextInput,
  AppTextButton,
  CrossPicker,
  DatePicker,
} from "../../components";
import GetSqlDate from "../../components/commmon/GetSqlDate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AddIngredient } from "../../services/ingredientsService";
import {
  getCategories,
  getLocations,
  getConfectionTypes,
} from "../../services/otherServices";
import { openPackedList, ripenessList, frozenList } from "../../data/initData";
import { Styles } from "./AddIngredientsstyles";

function AddIngredients(props) {
  const [Toastify, setToastify] = useState();

  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [confection, setConfection] = useState("");
  const [openPacked, setOpenPacked] = useState("packed");
  const [ripeness, setRipeness] = useState("");
  const [frozen, setFrozen] = useState("");
  const [categoryList, setCategoryList] = useState([{ label: "", value: "" }]);
  const [locationList, setLocationList] = useState([{ label: "", value: "" }]);
  const [confectionList, setConfectionList] = useState([
    { label: "", value: "" },
  ]);
  // date
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  useEffect(() => {
    allCategories();
    allLocations();
    allConfectionTypes();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const handleSubmit = async () => {
    if (name === "") {
      Toastify.error("Ingredient Name is required");
      return;
    }

    let ripenessEditedDate = null;
    if (confection === "fresh") {
      ripenessEditedDate = GetSqlDate(new Date());
    }

    try {
      let userId = await AsyncStorage.getItem("token");

      const body = {
        name,
        brandName,
        category,
        location,
        confectionType: confection,
        ripeness,
        ripenessEditedDate,
        frozen,
        openClose: openPacked,
        expirationDate: GetSqlDate(date),
      };

      await AddIngredient(body, userId);
      Toastify.success("Ingredient Added Successfully");
    } catch (error) {
      console.log("ingredients Added Error: ", error);
      Toastify.error("Ingredient is not Added");
    }
  };

  const allCategories = async () => {
    try {
      const { data } = await getCategories();
      let list = data.map((item) => {
        return { label: item.name, value: item.name };
      });
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
      setConfectionList(list);
    } catch (error) {
      console.log(error);
      // Toastify.error('Error in getting categories');
    }
  };

  return (
    <View style={Styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Toast ref={(t) => setToastify(t)} />
      {/* Kitchen buddy top container */}
      <View style={Styles.topcontainer}>
        <MaterialCommunityIcons
          onPress={() => props.navigation.navigate("Home")}
          style={Styles.topcontainer_icons}
          name="chevron-left"
          size={RFPercentage(4)}
          color={colors.lightGrey}
        />
        <Text style={Styles.topcontainer_text}>Add Ingredients</Text>
      </View>

      {/* Bottom Contaienr */}
      <View style={Styles.bottomcontainer}>
        <ScrollView style={Styles.bottomcontainer_scrollview}>
          <View style={Styles.bottomcontainer_view}>
            <View style={Styles.bottomcontainer_view_view}>
              <Text style={Styles.bottomcontainer_view_view_text}>
                Name of Ingredient*
              </Text>
            </View>
            <AppTextInput
              placeHolder="Name"
              width="100%"
              value={name}
              onChange={(text) => setName(text)}
              borderWidth={1}
              height={RFPercentage(6)}
            />
          </View>
          <View style={Styles.bottomcontainer_view2}>
            <View style={Styles.bottomcontainer_view2_view}>
              <Text style={Styles.bottomcontainer_view2_view_text}>
                Brand of Ingredient
              </Text>
            </View>
            <AppTextInput
              placeHolder="Brand"
              width="100%"
              value={brandName}
              onChange={(text) => setBrandName(text)}
              borderWidth={1}
              height={RFPercentage(6)}
            />
          </View>

          {/* drop down Category */}
          <CrossPicker
            item={categoryList}
            setItem={setCategory}
            selectedItem={category}
            placeholder={"Select Category"}
            title={"Choose Category"}
          />

          {/* drop down location */}
          <CrossPicker
            item={locationList}
            setItem={setLocation}
            selectedItem={location}
            placeholder={"Select Location"}
            title={"Choose Location"}
          />

          {/* drop down confection */}
          <CrossPicker
            item={confectionList}
            setItem={setConfection}
            selectedItem={confection}
            placeholder={"Select Confection"}
            title={"Choose Confection type"}
          />

          {/* drop down Ripeness */}
          {confection === "fresh" ? (
            <CrossPicker
              item={ripenessList}
              setItem={setRipeness}
              selectedItem={ripeness}
              placeholder={"Choose Ripeness"}
              title={"Choose Ripeness"}
            />
          ) : null}

          {/* drop down Frozen or not */}
          {confection === "fresh" ? (
            <CrossPicker
              item={frozenList}
              setItem={setFrozen}
              selectedItem={frozen}
              placeholder={"Frozen or Not"}
              title={"Frozen or Not"}
            />
          ) : null}

          {/* drop down open/packed */}
          <CrossPicker
            item={openPackedList}
            setItem={setOpenPacked}
            selectedItem={openPacked}
            placeholder={"Select Confection"}
            title={"Choose Open/Packed"}
          />

          {/* dateTimePicker component */}
          <DatePicker
            title={"Select Expiration Date"}
            date={date}
            onChange={onChange}
            setShow={(value) => {
              setShow(value);
            }}
            show={show}
          />
          {/* Add button */}
          <View style={Styles.bottomcontainer_view3}>
            <AppTextButton
              name="Add Ingredient"
              borderRadius={RFPercentage(1.3)}
              onSubmit={() => handleSubmit()}
              backgroundColor={colors.primary}
              width="100%"
              height={RFPercentage(5.5)}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}


export default AddIngredients;
