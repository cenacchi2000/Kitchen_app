import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Styles } from "./LoginStyles";
import { StatusBar } from "expo-status-bar";
import { RFPercentage } from "react-native-responsive-fontsize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "toastify-react-native";

import {
  AppTextInput,
  AppTextButton,
  RederactBack,
  Indicator,
} from "../../components";
import colors from "../../config/colors";
import { loginField } from "../../data/initData";
import { loginUser } from "../../services/userService";
import logo from "../../../assets/images/kitchenLogo.gif";

function Login(props) {
  const [indicator, setIndicator] = useState(false);
  const [toastify, setToastify] = useState();
  const [feilds, setFeilds] = useState(loginField);

  const handleChange = (text, id) => {
    const tempFeilds = [...feilds];
    tempFeilds[id].value = text;
    setFeilds(tempFeilds);
  };

  const handleSubmit = async () => {
    const email = feilds[0].value;
    const password = feilds[1].value;
    try {
      setIndicator(true);
      const { data } = await loginUser(email, password);
      await AsyncStorage.setItem("token", data.id.toString());
      setIndicator(false);
      props.navigation.navigate("home");
    } catch (error) {
      console.log("login error: ", error);
      setIndicator(false);
      toastify.error("Login Error");
    }
  };

  // get token from AsyncStorage to confirm login or logout
  let validateWithToken = async () => {
    // await AsyncStorage.removeItem('token');
    try {
      let res = await AsyncStorage.getItem("token");
      if (res) {
        props.navigation.navigate("home");
        return;
      }
      props.navigation.navigate("login");
    } catch (error) {}
  };

  useEffect(() => {
    validateWithToken();
  }, [props.route.params]);

  return (
    <View style={Styles.container}>
      <StatusBar style="light" backgroundColor={colors.primary} />
      {/* Toast component */}
      <Toast ref={(c) => setToastify(c)} />
      {/* Kitchen buddy top container */}
      <View style={Styles.topcontainer}>
        <View style={Styles.topcontainer_view}>
          <Image style={Styles.topcontainer_view_image} source={logo} />
        </View>
      </View>
      {indicator ? (
        <Indicator />
      ) : (
        <>
          {/* Bottom Contaienr */}
          <View style={Styles.bottomContainer}>
            <View style={Styles.loginHardCodedWrapper}>
              <Text style={Styles.loginHardCodedText}>Login</Text>
            </View>
            {/* Text feilds */}
            {feilds.map((item, i) => (
              <View
                key={i}
                style={{
                  marginTop: i == 0 ? RFPercentage(10) : RFPercentage(4),
                  width: "85%",
                }}
              >
                <AppTextInput
                  placeHolder={item.placeHolder}
                  width="100%"
                  value={item.value}
                  onChange={(text) => handleChange(text, item.id)}
                  secure={item.secure}
                />
              </View>
            ))}
            {/* Login button */}
            <View style={Styles.loginButton}>
              <AppTextButton
                name="LOGIN"
                borderRadius={RFPercentage(1.3)}
                onSubmit={() => handleSubmit()}
                backgroundColor={colors.primary}
                width="100%"
                height={RFPercentage(5.5)}
              />
            </View>
          </View>
          {/* Login text */}
          <RederactBack
            onPressBtn={() => {
              props.navigation.navigate("signup");
            }}
            text={"Dont't have an account?"}
            button_name={"Sign Up"}
          />
        </>
      )}
    </View>
  );
}

export default Login;
