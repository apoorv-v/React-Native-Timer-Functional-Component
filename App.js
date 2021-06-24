import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [counter, setcounter] = useState(10);
  const [isActive, setActive] = useState(true);
  const [restart, reset] = useState(1);
  var timer = null;
  
  useEffect(() => {
    if (isActive) {
      timer = setTimeout(() => {
        setcounter(counter - 1);
      }, 1000);
    }
  }, [restart]);
  useEffect(() => {
    if (isActive && counter >= 0) {
      timer = setTimeout(() => {
        if (counter != 10) {
          if (counter <= 0) {
            setcounter(0);
            setActive(false);
          } else {
            setcounter(counter - 1);
          }
        }
      }, 1000);
    } else {
      return () => clearTimeout(timer);
    }
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          if(isActive == false){
            setcounter(10);
            setActive(true);
            reset(restart + 1)
          }
        }}
        style={{ fontSize: 50 }}
      >
        {counter == 0 ? "reset" : counter}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
