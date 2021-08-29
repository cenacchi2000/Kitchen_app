import * as React from "react";
import { Appbar } from "react-native-paper";
import { Styles } from "./Styles";

const AppBar = () => {
  return (
    <Appbar.Header style={Styles.container}>
      <Appbar.BackAction />
      <Appbar.Content style={Styles.title} title="Kitchen Buddy" />
    </Appbar.Header>
  );
};

export default AppBar;
