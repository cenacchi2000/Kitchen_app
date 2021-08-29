/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {LogBox } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize"
import AnimatedSplash from "react-native-animated-splash-screen";

import colors from './app/config/colors';
import Root from './app/navigations/Root';

LogBox.ignoreAllLogs(true)

export default function App() {

  const [isReady, setIsReady] = useState(false)

  const cacheResourcesAsync = async () => {
    await performAPICalls();
    await downloadAssets();

    setTimeout(() => {
      setIsReady(true);
    }, 2000)
  };

  // Put any code you need to prepare your app in these functions
  async function performAPICalls() { }
  async function downloadAssets() { }

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isReady}
      onLoad={cacheResourcesAsync()}
      logoImage={require("./assets/images/splash.gif")}
      backgroundColor={colors.primary}
      logoHeight={RFPercentage(52)}
      logoWidth={RFPercentage(52)}
    >
      <Root/>
    </AnimatedSplash>
  );
}

