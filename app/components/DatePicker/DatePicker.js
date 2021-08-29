import React from "react";
import { Platform, View, TouchableOpacity, Text } from "react-native";

import { Styles } from "./Styles";
import { RFPercentage } from "react-native-responsive-fontsize";
import DateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({ title, date, onChange, setShow, show }) => {
  return (
    <View style={Styles.container}>
      <View style={{ paddingBottom: RFPercentage(1.2) }}>
        <Text style={Styles.titleText}>{title}</Text>
      </View>

      <View>
        <View style={Styles.dateContainer}>
          <TouchableOpacity
            style={{ width: Platform.OS === "ios" ? "80%" : "100%" }}
            onPress={() => setShow(true)}
          >
            <Text style={Styles.dateText}>{date.toDateString()}</Text>
          </TouchableOpacity>
          {Platform.OS === "ios" ? (
            <TouchableOpacity
              style={{ width: "20%" }}
              onPress={() => setShow(true)}
            >
              <Text onPress={() => setShow(false)} style={Styles.doneText}>
                Done
              </Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      {show && (
        <DateTimePicker
          style={Styles.dateTimeContainer}
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DatePicker;
