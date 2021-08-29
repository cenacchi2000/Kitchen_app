import React, { useState, useEffect } from "react";
import {
  RefreshControl,
  ActivityIndicator,
  Dimensions,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../../components/AppTextInput/AppTextInput";
import colors from "../../config/colors";
import banner from "../../../assets/images/order-grocery-small.jpg";
import Card from "../../components/Card/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllIngredients } from "../../services/ingredientsService";
import GetSqlDate from "../../components/commmon/GetSqlDate";
import { Styles } from "./Homestyles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Home(props) {
  const [searchValue, setSearchValue] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [oldIngredients, setOldIngredients] = useState([]);
  const [activityIndic, setActivityIndic] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getIngredients();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getIngredients();
  }, []);

  const handleSearch = () => {
    let temp = [...oldIngredients];
    let newIngredients = temp.map((ingredient) => {
      if (ingredient.name.includes(searchValue)) {
        return ingredient;
      }
    });
    setIngredients(newIngredients);
  };

  const getIngredients = async () => {
    try {
      setActivityIndic(true);
      const userId = await AsyncStorage.getItem("token");
      const { data } = await getAllIngredients(userId);
      const allIngredients = data.map((item) => {
        item.expirationDate = GetSqlDate(new Date(item.expirationDate));
        return item;
      });
      setIngredients(allIngredients);
      setOldIngredients(allIngredients);
    } catch (error) {
      console.log("Error All ingredients: ", error);
    }
    setRefreshing(false);
    setActivityIndic(false);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      props.navigation.navigate("login");
    } catch (error) {
      alert("Logout Error");
    }
  };

  return (
    <View style={Styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      {/* Top container */}
      <View style={Styles.topcontainer}>
        <ImageBackground style={Styles.topcontainer_image} source={banner}>
          <MaterialCommunityIcons
            onPress={() => handleLogout()}
            style={Styles.topcontainer_image_icon}
            name="exit-to-app"
            size={RFPercentage(3)}
            color={colors.lightGrey}
          />
          <View style={{ flexDirection: "column" }}>
            {/* Search feilds */}
            <View style={{ width: "85%", bottom: RFPercentage(7.5) }}>
              <AppTextInput
                placeHolder="Search"
                width="100%"
                value={searchValue}
                onChange={(text) => setSearchValue(text)}
                rightIcon="magnify"
                rightFunction={() => handleSearch()}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      {activityIndic ? (
        <View style={Styles.topcontainer_view}>
          <ActivityIndicator color={colors.primary} size={RFPercentage(6)} />
        </View>
      ) : (
        <>
          {/* Bottom Contaienr */}
          <View style={Styles.bottomcontainer}>
            <FlatList
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              style={{ marginTop: RFPercentage(3) }}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              data={ingredients.length === 0 ? [{ blank: true }] : ingredients}
              keyExtractor={(item, index) => item.id}
              renderItem={({ item, i }) => (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate("ingredientDetails", {
                      item: item,
                    })
                  }
                  activeOpacity={0.9}
                  style={[
                    Styles.cardWrapper,
                    {
                      maxHeight: item.blank ? 0 : null,
                    },
                  ]}
                >
                  {item.blank ? null : (
                    <Card
                      index={i}
                      title={item.name}
                      confectionType={item.confectionType}
                      expirationDate={item.expirationDate}
                      location={item.location}
                      category={item.category}
                    />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
}

export default Home;
