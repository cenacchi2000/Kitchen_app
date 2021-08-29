import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ReactNativeCrossPicker from "react-native-cross-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Toast from "toastify-react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

import colors from "../../config/colors";
import AppTextInput from "../../components/AppTextInput/AppTextInput";
import AppTextButton from "../../components/AppTextButton/AppTextButton";
import GetSqlDate from "../../components/commmon/GetSqlDate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AddIngredient } from "../../services/ingredientsService";
import { getProductDetails } from "../../services/productService";
import {
  getCategories,
  getLocations,
  getConfectionTypes,
} from "../../services/otherServices";
import { Styles } from "./BarcodeAddstyles";
import { CrossPicker } from "./Components/CrossPicker";

function BarcodeAddIngredients(props) {
  const [Toastify, setToastify] = useState();
  const [name, setName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [confection, setConfection] = useState("");
  const [openPacked, setOpenPacked] = useState("packed");
  const [ripeness, setRipeness] = useState("");
  const [frozen, setFrozen] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [categoryList, setCategoryList] = useState([{ label: "", value: "" }]);
  const [locationList, setLocationList] = useState([{ label: "", value: "" }]);
  const [confectionList, setConfectionList] = useState([
    { label: "", value: "" },
  ]);

  // date
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const getPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    try {
      const { data: detail } = await getProductDetails(data);

      if (typeof detail.product.generic_name != undefined) {
        setName(detail.product.generic_name);
      }

      if (detail.product.brands != undefined) {
        setBrandName(detail.product.brands);
      }

      if (detail.product.categories != undefined) {
        let categoriesTags = detail.product.categories.split(",");
        let newCategory = categoriesTags[0];

        setCategoryList([
          ...categoryList,
          { label: newCategory, value: newCategory },
        ]);
        setCategory(newCategory);
      }

      // extracting and validating date
      if (detail.product.expiration_date != undefined) {
        let expiNewDate = new Date(detail.product.expiration_date);
        let isValid = expiNewDate.getTime();
        if (isValid) {
          setDate(expiNewDate);
        }
      }
    } catch (error) {
      console.log("bar code product error: ", error);
      Toastify.error("Error in extracting product details");
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

  useEffect(() => {
    getPermission();
    allCategories();
    allLocations();
    allConfectionTypes();
    setScanned(false);
  }, []);

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

  const openPackedList = [
    { label: "packed", value: "packed" },
    { label: "open", value: "open" },
  ];
  const ripenessList = [
    { label: "green", value: "green" },
    { label: "ripe/mature", value: "ripe/mature" },
    { label: "advanced", value: "advanced" },
    { label: "too ripe", value: "too ripe" },
  ];
  const frozenList = [
    { label: "yes", value: "yes" },
    { label: "no", value: "no" },
  ];

  const iconCategory = () => {
    return (
      <MaterialCommunityIcons name={"chevron-down"} size={20} color={"grey"} />
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      <Toast ref={(t) => setToastify(t)} />
      {/* Kitchen buddy top container */}
      {!scanned ? (
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            />
          )}
        </View>
      ) : (
        <>
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
              <View style={Styles.bottomcontainer_scrollview_view}>
                <View style={Styles.bottomcontainer_scrollview_view_view}>
                  <Text
                    style={Styles.bottomcontainer_scrollview_view_view_text}
                  >
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
              <View style={Styles.bottomcontainer_scrollview_view2}>
                <View style={Styles.bottomcontainer_scrollview_view2_view}>
                  <Text
                    style={Styles.bottomcontainer_scrollview_view2_view_text}
                  >
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
              <View style={Styles.bottomcontainer_scrollview_view3}>
                <View style={Styles.bottomcontainer_scrollview_view3_view}>
                  <Text
                    style={Styles.bottomcontainer_scrollview_view3_view_text}
                  >
                    Choose Category
                  </Text>
                </View>
                <ReactNativeCrossPicker
                  placeHolderSize={RFPercentage(2.2)}
                  modalTextStyle={{ color: colors.primary }}
                  mainComponentStyle={{
                    borderColor: colors.primary,
                    borderWidth: 1,
                  }}
                  iconComponent={iconCategory}
                  items={categoryList}
                  setItem={setCategory}
                  selectedItem={category}
                  placeholder="Select Category"
                  modalMarginTop={RFPercentage(47)}
                />
              </View>

              {/* drop down location */}
              <View
                style={{
                  flexDirection: "column",
                  marginTop: RFPercentage(2),
                  width: "85%",
                }}
              >
                <View style={{ paddingBottom: RFPercentage(1.2) }}>
                  <Text
                    style={{
                      fontSize: RFPercentage(2.2),
                      color: colors.primaryLight,
                    }}
                  >
                    Choose Location
                  </Text>
                </View>
                <ReactNativeCrossPicker
                  placeHolderSize={RFPercentage(2.2)}
                  modalTextStyle={{ color: colors.primary }}
                  mainComponentStyle={{
                    height: RFPercentage(6),
                    borderColor: colors.primary,
                    borderWidth: 1,
                  }}
                  iconComponent={iconCategory}
                  items={locationList}
                  setItem={setLocation}
                  selectedItem={location}
                  placeholder="Select Location"
                  modalMarginTop={RFPercentage(57)}
                />
              </View>

              {/* drop down confection */}
              <View style={Styles.bottomcontainer_scrollview_view4}>
                <View style={Styles.bottomcontainer_scrollview_view4_view}>
                  <Text
                    style={Styles.bottomcontainer_scrollview_view4_view_text}
                  >
                    Choose Confection type
                  </Text>
                </View>
                <ReactNativeCrossPicker
                  placeHolderSize={RFPercentage(2.2)}
                  modalTextStyle={{ color: colors.primary }}
                  mainComponentStyle={{
                    height: RFPercentage(6),
                    borderColor: colors.primary,
                    borderWidth: 1,
                  }}
                  iconComponent={iconCategory}
                  items={confectionList}
                  setItem={setConfection}
                  selectedItem={confection}
                  placeholder="Select Confection"
                  modalMarginTop={RFPercentage(67)}
                />
              </View>

              {/* drop down Ripeness */}
              {confection === "fresh" && (
                <CrossPicker
                  title={"Choose Ripeness"}
                  list={ripenessList}
                  setItem={setRipeness}
                  selectedItem={ripeness}
                  iconCategory={iconCategory}
                  placeholder={"Choose Ripeness"}
                />
              )}

              {/* drop down Frozen or not */}
              {confection === "fresh" && (
                <CrossPicker
                  title={"Frozen or Not"}
                  list={frozenList}
                  setItem={setFrozen}
                  selectedItem={frozen}
                  iconCategory={iconCategory}
                  placeholder={"Frozen or Not"}
                />
              )}

              {/* drop down open/packed */}
              <View style={Styles.bottomcontainer_scrollview_view7}>
                <View style={Styles.bottomcontainer_scrollview_view7_view}>
                  <Text
                    style={Styles.bottomcontainer_scrollview_view7_view_text}
                  >
                    Choose Open/Packed
                  </Text>
                </View>
                <ReactNativeCrossPicker
                  placeHolderSize={RFPercentage(2.2)}
                  modalTextStyle={{ color: colors.primary }}
                  mainComponentStyle={{
                    height: RFPercentage(6),
                    borderColor: colors.primary,
                    borderWidth: 1,
                  }}
                  iconComponent={iconCategory}
                  items={openPackedList}
                  setItem={setOpenPacked}
                  selectedItem={openPacked}
                  placeholder="Select Confection"
                  modalMarginTop={RFPercentage(77)}
                />
              </View>

              {/* dateTimePicker component */}
              <View style={Styles.bottomcontainer_scrollview_view8}>
                <View style={Styles.bottomcontainer_scrollview_view8_view}>
                  <Text
                    style={Styles.bottomcontainer_scrollview_view8_view_text}
                  >
                    Select Expiration Date
                  </Text>
                </View>

                <View>
                  <View
                    style={Styles.bottomcontainer_scrollview_view8_view_view}
                  >
                    <TouchableOpacity
                      style={
                        Styles.bottomcontainer_scrollview_view8_view_view_touchable
                      }
                      onPress={() => setShow(true)}
                    >
                      <Text
                        style={
                          Styles.bottomcontainer_scrollview_view8_view_view_text
                        }
                      >
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
                          style={{
                            fontSize: RFPercentage(2.2),
                            color: colors.primary,
                            width: "100%",
                          }}
                        >
                          Done
                        </Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
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

              {/* Add button */}
              <View style={Styles.bottomcontainer_scrollview_view9}>
                <AppTextButton
                  name="Add Ingredient"
                  borderRadius={RFPercentage(1.3)}
                  onSubmit={() => handleSubmit()}
                  backgroundColor={colors.primary}
                  width="48%"
                  height={RFPercentage(5.5)}
                />

                {/* scan button */}
                <AppTextButton
                  name="Scan Barcode"
                  borderRadius={RFPercentage(1.3)}
                  onSubmit={() => setScanned(false)}
                  backgroundColor={colors.primary}
                  width="48%"
                  height={RFPercentage(5.5)}
                />
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
}

export default BarcodeAddIngredients;
