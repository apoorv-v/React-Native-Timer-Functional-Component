import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
// import CountDown from 'react-native-countdown-component';
import CountDownSET from './cd';
export default function App() {
  const [runing, setRun] = useState(false)
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50 }} onPress={()=>setRun(true)}>BUTT.</Text>
      <CountDownSET
          until={120}
          digitTxtStyle = {{color: "#FF6724", }}
          // showSeparator={true}
          digitStyle = {{backgroundColor : "rgba(0, 0, 0, 0)"}}
          timeToShow={['H','M', 'S']}
          running = {runing}
          size={25}

        />
        
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B6B6F",
    alignItems: "center",
    justifyContent: "center",
  },
});
