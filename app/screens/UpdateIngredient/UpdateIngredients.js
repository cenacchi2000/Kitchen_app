import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Platform, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
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
import { updateIngredient } from "../../services/ingredientsService";
import GetSqlDate from "../../components/commmon/GetSqlDate";
import {
  getCategories,
  getLocations,
  getConfectionTypes,
} from "../../services/otherServices";
import { openPackedList, ripenessList, frozenList } from "../../data/initData";
import { Styles } from "./UpdateIngredientStyles";

function UpdateIngredients(props) {
  const [toastify, setToastify] = useState();
  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [confection, setConfection] = useState("");
  const [ripeness, setRipeness] = useState("");
  const [frozen, setFrozen] = useState("");
  const [openPacked, setOpenPacked] = useState("packed");
  const [oldRipenessEditedDate, setOldRipenessEditedDate] = useState("packed");
  const [id, setId] = useState(null);
  const [oldRipness, setOldRipness] = useState();
  const [categoryList, setCategoryList] = useState([{ label: "", value: "" }]);
  const [locationList, setLocationList] = useState([{ label: "", value: "" }]);
  const [confectionList, setConfectionList] = useState([
    { label: "", value: "" },
  ]);

  // date
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  useEffect(() => {
    const {
      name,
      brand,
      category,
      location,
      confectionType,
      ripeness,
      frozen,
      openPacked,
      expirationDate,
      ripenessEditedDate,
      id,
    } = props.route.params.ingredientDetails;
    setId(id);
    setName(name);
    setBrandName(brand);
    setCategory(category);
    setLocation(location);
    setConfection(confectionType);
    setRipeness(ripeness);
    setFrozen(frozen);
    setOpenPacked(openPacked);
    setDate(new Date(expirationDate));
    setOldRipness(ripeness);
    setOldRipenessEditedDate(ripenessEditedDate);

    allCategories();
    allLocations();
    allConfectionTypes();
  }, [props.route.params.ingredientDetails]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
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

  const handleSubmit = async () => {
    if (name === "") {
      toastify.error("Ingredient Name is required");
      return;
    }

    let ripenessEditedDate = null;
    if (confection === "fresh" && ripeness !== "" && ripeness !== oldRipness) {
      ripenessEditedDate = GetSqlDate(new Date());
    }
    if (confection === "fresh" && ripeness !== "" && ripeness === oldRipness) {
      ripenessEditedDate = oldRipenessEditedDate;
    }

    try {
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
      await updateIngredient(body, id);
      toastify.success("Ingredient Updated Successfully");
      setTimeout(() => {
        props.navigation.navigate("home");
      }, 2000);
    } catch (error) {
      console.log("Ingredient Update Error: ", error);
      toastify.error("Ingredient Update Error");
    }
  };

  return (
    <View style={Styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Toast ref={(c) => setToastify(c)} />
      {/* Kitchen buddy top container */}
      <View style={Styles.upadateIngredientWrapper}>
        <MaterialCommunityIcons
          onPress={() => props.navigation.navigate("Home")}
          style={Styles.chevronLeft}
          name="chevron-left"
          size={RFPercentage(4)}
          color={colors.lightGrey}
        />
        <Text style={Styles.updateIngText}>Update Ingredient</Text>
      </View>
      {/* Bottom Contaienr */}
      <View style={Styles.scrollViewWrapper}>
        <ScrollView style={Styles.scrlView}>
          <View style={Styles.nameIngredientWrapper}>
            <View style={{ paddingBottom: RFPercentage(1.2) }}>
              <Text style={Styles.nameIngredinetText}>Name of Ingredient*</Text>
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
          <View style={Styles.brandWrapper}>
            <View style={{ paddingBottom: RFPercentage(1.2) }}>
              <Text style={Styles.brandText}>Brand of Ingredient</Text>
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
          <CrossPicker
            item={ripenessList}
            setItem={setRipeness}
            selectedItem={ripeness}
            placeholder={"Choose Ripeness"}
            title={"Choose Ripeness"}
          />

          {/* drop down Frozen or not */}
          <CrossPicker
            item={frozenList}
            setItem={setFrozen}
            selectedItem={frozen}
            placeholder={"Frozen or Not"}
            title={"Frozen or Not"}
          />

          {/* drop down open/packed */}
          <CrossPicker
            item={openPackedList}
            setItem={setOpenPacked}
            selectedItem={openPacked}
            placeholder={"Select Confection"}
            title={"Choose open/packed"}
          />

          {/* dateTimePicker component */}
          {
            <DatePicker
              title={"Select Expiration Date"}
              date={date}
              onChange={onChange}
              setShow={(value) => {
                setShow(value);
              }}
              show={show}
            />
          }
          {/* Update button */}
          <View style={Styles.updateButtonWrapper}>
            <AppTextButton
              name="Update Ingredient"
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

export default UpdateIngredients;
